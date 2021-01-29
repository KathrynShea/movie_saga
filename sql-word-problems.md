# SQL Challenges

For these questions, you will need a clean database.

Create a new database named: `saga_movies_sql_practice`

Then, run the SQL for tables and datas in the `database.sql` file just like you did for the React app set-up.

## Create an ERD

Make an ERD of the tables we have. Add an image of your diagram or a link to your diagram to this repo. If a link, we will need access to whatever app you are using.

You may draw this on paper, draw it with a drawing app, or use a DB planning tool such as: 

- https://www.dbdesigner.net/
- https://sqldbm.com/Home/


## SQL

Supply the SQL to answer each question below. We're looking for the actual SQL (do not use $1 for placeholders).

1. Select all movies with the 'Adventure' genre? Use the  `id`.


2. How would you see how many movies each genre has? Make sure you get back all the genres!

result example: 

| genre_name | movie_count |
| --- | :---: |
| Adventure | 4 |
| Comedy | 1 |



3. How would you add an existing genre to a movie?
4. How would you remove a genre from a movie?


## Stretch
How would you get all movies and all of their genres, but only one row per movie? (For example, on the list page we want to see all the movies and all of the movies' genres that apply)
> There're a few ways to do this, do research on ARRAY_AGG or JSON_AGG

How would you delete a Movie that has genres?
> You may need to check out the ON DELETE CASCADE for the table columns...



