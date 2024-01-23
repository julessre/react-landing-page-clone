import React from 'react';
import ButtonBlue from './ButtonBlue';
import styles from './CourseIntro.module.scss';

export default function CourseIntro() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2> Learn how to create your own variable color font</h2>
        <p>
          Variable fonts are an exciting new way to express typography. In my
          work, I'm pushing the limits of this technique. I’m thrilled to share
          my knowledge with the rest of the world in this video course!
        </p>
        <div className={styles.courseInstructor}>
          <img
            src="/images/Arthur_Reinders_Folmer.jpeg"
            alt="Arthur Reinders Folmer"
          />
          <div className={styles.courseInstructorText}>
            <div className={styles.boldText}>
              <p>Arthur Reinders Folmer</p>
            </div>
            <p>Instructor</p>
          </div>
        </div>
        <div className={styles.contentBoxGrid}>
          <p>Full course, only €179</p>
          <ButtonBlue>Join now</ButtonBlue>
        </div>
      </div>
    </section>
  );
}
