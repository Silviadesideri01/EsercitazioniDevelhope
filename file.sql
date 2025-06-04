--Esercizio SQL: DDL, DML, DQL e JOIN
--Ripasso Teorico:
--- DDL (Data Definition Language): include comandi per creare e modificare strutture (CREATE,
--ALTER, DROP).
--- DML (Data Manipulation Language): include comandi per manipolare i dati (INSERT, UPDATE,
--DELETE).
--- DQL (Data Query Language): include comandi per interrogare i dati (SELECT).

--Struttura del Database:
--Sono presenti tre tabelle:
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
);

CREATE TABLE courses (
    id INTEGER PRIMARY KEY,
    title TEXT
);

CREATE TABLE enrollments (
    student_id INTEGER,
    course_id INTEGER,
    grade INTEGER,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Inserimento dati nella tabella students
INSERT INTO students (id, name, age) VALUES
(1, 'Alice', 22),
(2, 'Bob', 24),
(3, 'Charlie', 23);

-- Inserimento dati nella tabella courses
INSERT INTO courses (id, title) VALUES
(1, 'Database Systems'),
(2, 'Web Development'),
(3, 'Algorithms');

-- Inserimento dati nella tabella enrollments
INSERT INTO enrollments (student_id, course_id, grade) VALUES
(1, 1, 28),
(2, 2, 30),
(3, 1, 25),
(1, 2, 30);

--Esercizi Richiesti:


--ES.1
--Scrivi la query per creare la tabella students. //DDL 
--CREATE TABLE è la parola chiave SQL che indica l'azione di creazione di una tabella.
--Le parentesi racchiudono la definizione delle colonne (attributi) che faranno parte della tabella. 
--Ogni colonna è separata da una virgola.
CREATE TABLE students (
    id INTEGER PRIMARY KEY, --identificatore unico per ogni studente.
    name TEXT, -- TEXT, per le stringhe di testo di lunghezza variabile.
    age INTEGER --indica che conterrà numeri interi
);


--ES2.
-- Inserisci un nuovo studente di nome "David", età 21. //DML
INSERT INTO students (name, age) --INSERT INTO sono le parole chiave che iniziano l'istruzione di inserimento.
--specifico quali valori seleziono e quali andrò a manipolare : le colonne name e age.
VALUES ('David', 21);
--VALUES è la parola chiave che introduce l'elenco dei valori.
--L'ordine dei valori deve corrispondere all'ordine delle colonne specificate. 
--Quindi, 'David' va a name e 21 va ad age.
--ORA ABBIAMO NELLA TABELLA STUDENTS UN PRIMO RECORD CON ID 4.



--ES3. 
--Modifica l'età dello studente con id = 3 a 24.
UPDATE students --UPDATE è la parola chiave che inizia l'istruzione di aggiornamento.
SET age = 24 --SET è la parola chiave che introduce le assegnazioni di valore.
WHERE id = 3; --WHERE è DOVE vogliamo modificare il valore in questo caso nello studente con ID 3(Charlie).



--ES4. Elimina lo studente con id = 2.
DELETE FROM students --DELETE FROM sono le parole chiave che iniziano l'istruzione di eliminazione.
WHERE id = 2; --IMPORTANTE SEMPRE WHERE, sia in fase di UPDATE che DELETE, indica dove accadrà la manipolazione.



--ES5. Seleziona tutti gli studenti con età maggiore di 22. //DQL
--interroghiamo il database per recuperare informazioni.
SELECT id, name, age  --oppure SELECT * (STA PER ALL, TUTTE)
--id, name, age è un elenco delle colonne specifiche che desideriamo visualizzare nel risultato
FROM students
WHERE age > 22; --è la condizione: verranno selezionate solo le righe in cui il valore nella colonna age è maggiore di 22.



--ES6. Mostra tutti gli studenti iscritti a "Database Systems", con nome dello studente e nome del corso.
SELECT
    s.name AS StudentName,     -- Seleziona il nome dello studente dalla tabella 'students'(s.=students)
    c.title AS CourseTitle     -- Seleziona il titolo del corso dalla tabella 'courses'(c.=courses)
FROM
    students AS s              -- Inizia dalla tabella 'students' e dagli l'alias 's'
JOIN
    enrollments AS e ON s.id = e.student_id  -- Unisci 'students' con 'enrollments'
JOIN
    courses AS c ON e.course_id = c.id      -- Unisci il risultato con 'courses'
WHERE
    c.title = 'Database Systems'; -- Filtra per mostrare solo il corso "Database Systems"



--ES7. Mostra per ogni studente l'elenco dei corsi a cui è iscritto e il voto.
SELECT
    s.name AS StudentName,     -- Nome dello studente
    c.title AS CourseTitle,    -- Titolo del corso
    e.grade AS Grade           -- Voto ottenuto
FROM
    students AS s
JOIN
    enrollments AS e ON s.id = e.student_id
JOIN
    courses AS c ON e.course_id = c.id
ORDER BY
    s.name, c.title; -- Ordina per nome dello studente e poi per titolo del corso