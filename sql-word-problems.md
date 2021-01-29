# SQL Challenges

For these questions, you will need a clean database.

Create a new database named: `saga_movies_sql_practice`

Then, run the SQL for tables and datas in the `database.sql` file just like you did for the React app set-up.

## Create an ERD

Make an ERD of the tables we have. Add an image of your diagram or a link to your diagram to this repo. If a link, we will need access to whatever app you are using.

You may draw this on paper, draw it with a drawing app, or use a DB planning tool such as: 

- https://www.dbdesigner.net/
- https://sqldbm.com/Home/


## SQL Questions

Supply the SQL that answers each question below. We're looking for the actual SQL (do not use $1 for placeholders). There may be multiple ways to get the results.

1. Select all movies with the 'Adventure' genre? Use the  `id`.

```sql
INSERT your SQL here :)
```

2. Get the count of movies that have each genre.  Make sure you get back all the genres!

```
Example Result:
---------------------------------
| genre_name    | movie_count   |
---------------------------------
| Adventure     | 4             |
---------------------------------
| Comedy        | 1             |
---------------------------------
| Drama         | 5             |
---------------------------------
| Disaster      | 0             |
---------------------------------
```


```sql
INSERT your SQL here
```

3. Add the genre "Superhero" to "Star Wars".

```sql
INSERT your SQL here
```

4. Remove the "Comedy" genre from "Titanic"

```sql
INSERT your SQL here
```


## Stretch

1. How would you get all movies and all of their genres, but only one row per movie? (For example, on the list page we want to see all the movies and all of the movies' genres that apply)

> There're a few ways to do this, do research on ARRAY_AGG or JSON_AGG

2. Delete the movie "The Martian". It has associated genres data...

> You may need to check out the ON DELETE CASCADE for the table columns...



