import '@fontsource/rosarivo';
import React from 'react';
import Button from './Button';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <img src="/images/logo.svg" alt="Logo" className={styles.logo} />
        <ul>
          <li>
            <Button>Join now</Button>
          </li>
          <li>Sign in</li>
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
