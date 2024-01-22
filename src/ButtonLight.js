import React from 'react';
import styles from './Button.module.scss';

export default function ButtonLight({ children }) {
  return <button className={styles.buttonLight}>{children}</button>;
}
