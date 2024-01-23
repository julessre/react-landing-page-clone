import React from 'react';
import styles from './LearningContentProp.module.scss';

export default function LearningContentProp(props) {
  return (
    <div>
      <img src={props.url} alt="icon of learning content" />
      <p className={styles.propTitle}>{props.title}</p>
    </div>
  );
}
