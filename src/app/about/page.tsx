// src/app/about/page.tsx
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Narayani Thoughts</h1>
      <div className={styles.content}>
        <p>
          In an age of endless noise, Narayani Thoughts stands apart—a platform built on facts, guided by values, and dedicated to reshaping India's narrative.
        </p>
        <h2 className={styles.subtitle}>Our Mission</h2>
        <p>
          To deliver world-class content marked by deep integrity, factual precision, and forward-looking vision—making complex issues understandable and actionable for every citizen. We exist because India needs journalism and commentary free from biases and narratives, anchored solely by truth and responsibility.
        </p>
        <h2 className={styles.subtitle}>Our Core Values</h2>
        <ul>
          <li><strong>Integrity First:</strong> Truth above clicks.</li>
          <li><strong>Transparency Always:</strong> Open citations, open corrections.</li>
          <li><strong>Community-Centric:</strong> Ideas from and for the people.</li>
          <li><strong>Courage & Clarity:</strong> Fearlessly presenting the truth plainly.</li>
        </ul>
      </div>
    </div>
  );
}