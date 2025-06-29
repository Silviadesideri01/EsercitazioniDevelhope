import passport from "passport"; //middlewere GUARDIA D'INGRESSO legge i token in ingresso, verifica se è valido o no.(AUTENTICA LE RICHIESTE)
import passportJWT from "passport-jwt"; //PASSPORT JASON WEB TOKEN, (è una tecnologia ti autenticazione)
import * as dotenv from "dotenv"; //PER I FILE .ENV
import { db } from "./db";

dotenv.config(); //ABILITIAMO DOTENV

//APERTURA CANCELLO D'INGRESSO RICHIESTE DA AUTORIZZARE:
//1 argomento: STRATEGIA: QUALE UTILIZZARE PER DECIFRARE IL TOKEN
// 1 ARGOMENTO STRATEGIA: Quale è la chiave SEGRETA da utilizzare per leggere il TOKEN
// 2 ARGOMENTO STRATEGIA: Dove si trova il Token (OVVERO BARERTOKEN) e da dove lo deve estrarre.
passport.use(
    new passportJWT.Strategy(
      {
        //CHIAVE SEGRETA NEL NOSTRO FILE.ENV
        secretOrKey: process.env.SECRET_KEY as string,
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      //Paylod: contenuto del token, done: Fa proseguire la richiesta.
      async (payload, done) => {
        try {
          const { userId } = payload;
          const user = await db.oneOrNone(
            `
              SELECT * FROM users WHERE userId=$1
          `,
            userId
          );
  
          if (user) {
            done(null, user);
          } else {
            done(new Error("Utente non trovato"));
          }
        } catch (error) {
          done(error);
        }
      }
    )
  );