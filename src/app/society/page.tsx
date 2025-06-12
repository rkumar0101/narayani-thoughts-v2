// src/app/society/page.tsx

import { getArticles } from "@/lib/data";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from './page.module.css';

export default async function SocietyPage() {
  const allArticles = await getArticles();

  // Filter for the 'Society' category
  const societyArticles = allArticles.filter(
    (article) => article.category === 'Society'
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crime & Society</h1>

      <div className={styles.articleGrid}>
        {societyArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}