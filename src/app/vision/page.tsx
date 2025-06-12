// src/app/vision/page.tsx

import { getArticles } from "@/lib/data";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from './page.module.css';

export default async function VisionPage() {
  const allArticles = await getArticles();

  // Filter for the 'Vision' category (this will be empty for now)
  const visionArticles = allArticles.filter(
    (article) => article.category === 'Vision'
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Visionary Ideas & Opinions</h1>

      {visionArticles.length > 0 ? (
        <div className={styles.articleGrid}>
          {visionArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p>No visionary articles have been published yet. Check back soon!</p>
      )}
    </div>
  );
}