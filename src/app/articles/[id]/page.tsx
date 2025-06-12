// src/app/articles/[id]/page.tsx

import { getArticleById } from "@/lib/data"; // Import the new function
import styles from './page.module.css';

type Props = {
  params: {
    id: string;
  };
};

export default async function ArticlePage({ params }: Props) {
  // Use the new function to get just one article
  const article = await getArticleById(params.id);

  if (!article) {
    return (
      <div className={styles.article}>
        <h1 className={styles.title}>Article not found</h1>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <header>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.meta}>
          By <span className={styles.author}>{article.author}</span>
        </p>
      </header>
      <div className={styles.content}>
        <p>{article.content}</p>
      </div>
    </article>
  );
}