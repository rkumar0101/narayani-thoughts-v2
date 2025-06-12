// src/app/page.tsx

import { getArticles } from "@/lib/data";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from './page.module.css';

// Add the 'async' keyword here
export default async function Home() {
  // Add the 'await' keyword here
  const articles = await getArticles();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Narayani Thoughts</h1>
          <p className={styles.subtitle}>
            A Voice Born of Vision, Grounded in Truth.
          </p>
        </div>
      </section>

      <div className={styles.pageContainer}>
        <section className={styles.articlesSection}>
          <h2 className={styles.sectionTitle}>Latest Articles</h2>
          <div className={styles.articleGrid}>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}