// src/app/geopolitics/page.tsx

import { getArticles } from "../lib/data";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import styles from './page.module.css'; // We will create this file next

export default function GeopoliticsPage() {
  const allArticles = getArticles();

  // Filter the articles to get only the ones in the 'Geopolitics' category
  const geopoliticsArticles = allArticles.filter(
    (article) => article.category === 'Geopolitics'
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Geopolitics & Strategy</h1>

      <div className={styles.articleGrid}>
        {geopoliticsArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}