// src/app/politics/page.tsx

import { getArticles } from "@/lib/data";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from './page.module.css'; // We will create this file next

export default async function PoliticsPage() {
  const allArticles = await getArticles();

  // Filter for the 'Politics' category
  const politicsArticles = allArticles.filter(
    (article) => article.category === 'Politics'
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Politics & Governance</h1>

      <div className={styles.articleGrid}>
        {politicsArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}