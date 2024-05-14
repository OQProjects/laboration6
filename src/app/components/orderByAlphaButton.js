"use client";

import React from 'react';
import styles from '../page.module.css';

const OrderByAlphaButton = ({ sortByTitle }) => {
  return (
    <button onClick={sortByTitle} className={styles.button}>Alfabetisk ordning</button>
  );
};

export default OrderByAlphaButton;
