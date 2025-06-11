// src/app/page.tsx

import { getArticles } from "@/lib/data";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from './page.module.css';

export default function Home() {
  const articles = getArticles();

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Narayani Thoughts</h1>
        <p className={styles.subtitle}>
          A Voice Born of Vision, Grounded in Truth.
        </p>
      </div>

      <div className={styles.articleGrid}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}