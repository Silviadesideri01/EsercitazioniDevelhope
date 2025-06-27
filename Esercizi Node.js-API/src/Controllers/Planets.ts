import { Request, Response } from "express";
import Joi from "joi";
import { db } from "./db.js";
import path from "path";
console.log("Database instance", db);

// --- SCHEMI JOI ---

// Schema per validare un singolo ID (come stringa numerica)
const singleIdSchema = Joi.string()
  .pattern(/^[0-9]{1,8}$/) // Deve avere solo numeri, da 1 a 8 cifre
  .required()
  .messages({
    "string.pattern.base":
      "L'ID deve contenere solo numeri e avere una lunghezza tra 1 e 8.",
    "any.required": "L'ID è obbligatorio.",
    "string.min": "L'ID deve avere almeno {#limit} caratteri.",
    "string.max": "L'ID non deve superare {#limit} caratteri.",
  });

// Schema per validare un singolo NOME (come stringa, permettendo spazi)
const nameSchema = Joi.string()
  .pattern(/^[a-zA-Z\s]{3,30}$/) // *** MODIFICATO: Aggiunto \s per permettere spazi ***
  .required()
  .min(3)
  .max(30)
  .messages({
    "string.pattern.base": "Il nome deve contenere solo lettere e spazi.",
    "any.required": "Il nome è obbligatorio.",
    "string.min": "Il nome deve avere almeno {#limit} caratteri.",
    "string.max": "Il nome non deve superare {#limit} caratteri.",
  });

// Schema per validare un OGGETTO PIANETA COMPLETO (usato per POST e potenzialmente PUT del body)
const planetObjectSchema = Joi.object({
  id: singleIdSchema, // Riutilizza lo schema dell'ID
  name: nameSchema, // Riutilizza lo schema del nome
});

// --- GETALL ---
const getAllPlanets = async (req: Request, res: Response) => {
  try {
    const planets = await db.manyOrNone(`SELECT * FROM planets;`);
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// --- GETID ---
const getOnePlanetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { error } = singleIdSchema.validate(id); // Usa singleIdSchema

    if (!error) {
      const planet = await db.oneOrNone(
        `SELECT id, name FROM planets WHERE id=$1`,
        Number(id) // Converte in numero per il DB
      );
      if (planet) {
        res.status(200).json(planet);
      } else {
        res.status(404).send(`Il pianeta con id ${id} non esiste`);
      }
    } else {
      res.status(400).json({ msg: error.details[0].message }); // Messaggio d'errore più pulito
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// --- POST ---
const createNewPlanet = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    // Qui validiamo solo il nome, perché l'ID spesso è auto-generato dal DB per la creazione
    const { error } = nameSchema.validate(name); // Usa nameSchema

    if (!error) {
      await db.none(`INSERT INTO planets (name) VALUES ($1);`, name);
      res
        .status(201)
        .json({ msg: `Nuovo pianeta '${name}' creato con successo!` });
    } else {
      res.status(400).json({ msg: error.details[0].message }); // Messaggio d'errore più pulito
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// --- PUT ---
const updatePlanetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const { error: idError } = singleIdSchema.validate(id); // Valida l'ID dal parametro
    const { error: nameError } = nameSchema.validate(name); // Valida il nome dal body

    if (!idError && !nameError) {
      // Controlla se il pianeta esiste prima di aggiornare
      const existingPlanet = await db.oneOrNone(
        `SELECT id FROM planets WHERE id=$1`,
        Number(id)
      );

      if (existingPlanet) {
        await db.none(`UPDATE planets SET name=$1 WHERE id=$2`, [
          name,
          Number(id),
        ]);
        res.status(200).json({
          msg: `Il pianeta con ID ${id} è stato aggiornato con il nome: ${name}`,
        });
      } else {
        res
          .status(404)
          .send(`Il pianeta con id ${id} non esiste per l'aggiornamento.`);
      }
    } else {
      res.status(400).json({ msg: (idError || nameError)?.details[0].message });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// --- DELETE ---
const deletePlanetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { error } = singleIdSchema.validate(id); // Usa singleIdSchema

    if (!error) {
      const existingPlanet = await db.oneOrNone(
        `SELECT id FROM planets WHERE id=$1;`,
        Number(id)
      );

      if (existingPlanet) {
        await db.none(`DELETE FROM planets WHERE id=$1;`, Number(id));
        res
          .status(200)
          .json({ msg: `Il pianeta con id ${id} è stato eliminato.` });
      } else {
        res
          .status(404)
          .send(`Il pianeta con id ${id} non esiste per l'eliminazione.`);
      }
    } else {
      res.status(400).json({ msg: error.details[0].message });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const uploadImage = async (req: Request, res: Response) => {
  try {
    const { params, file } = req;
    const { id } = params;
    if(id) {
      await db.none(
        `UPDATE planets SET image=$2 WHERE id=$1`
        ,[id, path]
      )
    }
    res.status(201).json({ msg: "Immagine pianeta caricata con successo!" });
  } 
  catch (error) {
    res.status(500).json({ msg: error });
  }
};

export {
  getAllPlanets,
  getOnePlanetById,
  createNewPlanet,
  updatePlanetById,
  deletePlanetById,
  uploadImage,
};
