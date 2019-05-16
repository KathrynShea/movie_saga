CREATE TABLE "images" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "file"  VARCHAR(120) NOT NULL
);

CREATE TABLE "tags" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL
);

INSERT INTO "images" ("title", "file")
VALUES 
('Abstract Shapes', 'AbstractShapes.jpg'),
('Chroma Blast', 'Chroma.jpg'),
('Color Burst', 'Color Burst.jpg'),
('Flower', 'Flower.jpg'),
('Reflection', 'Reflection.jpg');

INSERT INTO "tags" ("name")
VALUES 
('Energy'),
('Calming'),
('Inspirational'),
('Frantic'),
('Vertigo');