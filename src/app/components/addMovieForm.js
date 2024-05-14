"use client";

import React, { useState } from 'react';
import styles from '../page.module.css';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && grade) {
      addMovie({ title, grade: Number(grade) });
      setTitle('');
      setGrade('');
    } else {
      alert('Både titel och betyg måste anges');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Titel:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titel här..."
          className={styles.input}
        />
      </label>
      <br />
      <label>
        Betyg:
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className={styles.select}
        >
          <option value="">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <br />
      <button type="submit" className={styles.button}>Spara film</button>
    </form>
  );
};

export default AddMovieForm;
