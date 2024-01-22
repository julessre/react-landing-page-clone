import React from 'react';
import styles from './Button.module.scss';

export default function ButtonBlue({ children }) {
  return <button className={styles.buttonBlue}>{children}</button>;
}
