"use client";

import React from 'react';
import styles from '../page.module.css';

const OrderByGradeButton = ({ sortByGrade }) => {
  return (
    <button onClick={sortByGrade} className={styles.button}>Betygsordning</button>
  );
};

export default OrderByGradeButton;
