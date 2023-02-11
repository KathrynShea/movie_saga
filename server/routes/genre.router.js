const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//Select a list from the DB that includes all the movies and their different assigned genres. Sends back to saga.
router.get('/', (req, res) => {
  //console.log("i am inside the router.get");
  const query = `SELECT "movie_id", "title", "name" FROM "movies_genres"
  JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id";`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;