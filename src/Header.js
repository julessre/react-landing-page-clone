import '@fontsource/rosarivo';
import React from 'react';
import ButtonBlue from './ButtonBlue';
import ButtonLight from './ButtonLight';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <img src="/images/logo.svg" alt="Logo" className={styles.logo} />
        <ul>
          <li>
            <ButtonBlue>Join now</ButtonBlue>
          </li>
          <li>
            <ButtonLight>Sign in</ButtonLight>
          </li>
        </ul>
      </nav>
      <h1>
        Your own
        <br />
        variable
        <br />
        font
      </h1>
    </div>
  );
}
