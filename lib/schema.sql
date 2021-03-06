DROP TABLE IF EXISTS sets;

BEGIN;

CREATE TABLE sets (
  set_id SERIAL PRIMARY KEY,
  exercise VARCHAR NOT NULL,
  reps INT NOT NULL DEFAULT 0,
  weight INT NOT NULL,
  workout_date DATE NOT NULL,
  user_id INT NOT NULL
);

COMMIT;
