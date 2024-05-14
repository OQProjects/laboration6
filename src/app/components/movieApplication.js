"use client";

import React, { useState } from 'react';
import AddMovieForm from './addmovieform';
import Movies from './movies';
import OrderByAlphaButton from './orderbyalphabutton';
import OrderByGradeButton from './orderbygradebutton';
import styles from '../page.module.css';

const MovieApplication = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (title) => {
    setMovies(movies.filter(movie => movie.title !== title));
  };

  const sortByTitle = () => {
    setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const sortByGrade = () => {
    setMovies([...movies].sort((a, b) => b.grade - a.grade));
  };

  return (
    <div className={styles.container}>
      <h1>Min filmlista</h1>
      <AddMovieForm addMovie={addMovie} />
      <Movies movies={movies} removeMovie={removeMovie} />
      <div className={styles.buttons}>
        <OrderByAlphaButton sortByTitle={sortByTitle} />
        <OrderByGradeButton sortByGrade={sortByGrade} />
      </div>
    </div>
  );
};

export default MovieApplication;
