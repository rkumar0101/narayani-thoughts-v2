// src/app/science/page.tsx

import { getArticles } from "@/lib/data";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from './page.module.css';

export default async function SciencePage() {
  const allArticles = await getArticles();

  // Filter for the 'Science' category
  const scienceArticles = allArticles.filter(
    (article) => article.category === 'Science'
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Science & Innovation</h1>

      <div className={styles.articleGrid}>
        {scienceArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}