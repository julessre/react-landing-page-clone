import React from 'react';
import styles from './LearningContent.module.scss';
import LearningContentProp from './LearningContentProp';
import stylesProp from './LearningContentProp.module.scss';

export default function LearningContent() {
  return (
    <section className={styles.sectionBackground}>
      <div className={styles.sectionTopDesign} />
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2>What you will learn</h2>
          <p>
            The course consists of 11 video lessons. They cover everything from
            creating to implementing a variable font. Our goal is to make
            variable fonts accessible and fun!
          </p>
        </div>
      </div>
      <div className={stylesProp.propGrid}>
        <div className={stylesProp.propCard}>
          <LearningContentProp
            url="/images/vfc_learn01.svg"
            title="Create a basic typeface in Glyphs 3"
          />
        </div>
        <div className={stylesProp.propCard}>
          <LearningContentProp
            url="/images/vfc_learn02.svg"
            title="Add variables to your typeface"
          />
        </div>
        <div className={stylesProp.propCard}>
          <LearningContentProp
            url="/images/vfc_learn03.svg"
            title="Add colors to it"
          />
        </div>
        <div className={stylesProp.propCard}>
          <LearningContentProp
            url="/images/vfc_learn04.svg"
            title="Export your variable color font to use on the web"
          />
        </div>
        <div className={stylesProp.propCard}>
          <LearningContentProp
            url="/images/vfc_learn05.svg"
            title="Implement it in HTML and CSS"
          />
        </div>
        <div className={stylesProp.propCard}>
          <LearningContentProp
            url="/images/vfc_learn06.svg"
            title="Animate it in the browser"
          />
        </div>
      </div>
    </section>
  );
}
