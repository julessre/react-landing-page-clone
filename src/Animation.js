import React from 'react';
import styles from './Animation.module.scss';

export default function Animation() {
  return (
    <div>
      <video
        src="/images/Learn-animation.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        width="100%"
      >
        <track kind="captions" />
      </video>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <p>(You will learn keyframe animation as well! :)</p>
        </div>
      </div>
    </div>
  );
}
