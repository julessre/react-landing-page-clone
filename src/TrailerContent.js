import React from 'react';
import styles from './TrailerContent.module.scss';

export default function TrailerContent() {
  return (
    <div className={styles.sectionBackground}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2>Watch the trailer</h2>
        </div>
        <div className={styles.containerVideo}>
          <iframe
            title="Variable Font Course"
            src="https://player.vimeo.com/video/695357111"
            allow="fullscreen"
            sandbox
            width="150%"
            height="550"
          />
        </div>
      </div>
    </div>
  );
}
