// src/app/page.tsx

import styles from './page.module.css';

export default function Home() {
  return (
    // Note: The <main> tag was removed from here because
    // we added it to the main layout.tsx file.
    // We only need the specific content for this page.
    <>
      <h1 className={styles.title}>
        Narayani Thoughts
      </h1>
      <p className={styles.subtitle}>
        A Voice Born of Vision, Grounded in Truth.
      </p>
      <button className={styles.button}>
        Read the Vision
      </button>
    </>
  );
}