"use client";

import React from 'react';
import styles from '../page.module.css';

const Movie = ({ movie, removeMovie }) => {
  return (
    <li className={styles.movieItem}>
      {movie.title}
      {' '}
      {'★'.repeat(movie.grade)}
      <button onClick={() => removeMovie(movie.title)} className={styles.removeButton}>✖</button>
    </li>
  );
};

export default Movie;
