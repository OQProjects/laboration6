"use client";

import React from 'react';
import Movie from './movie';
import styles from '../page.module.css';

const Movies = ({ movies, removeMovie }) => {
  return (
    <div>
      <h2>Inlagda filmer</h2>
      <ul className={styles.movieList}>
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} removeMovie={removeMovie} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
