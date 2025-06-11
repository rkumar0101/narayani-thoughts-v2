// src/app/articles/[id]/page.tsx

import { getArticles } from "../lib/data";
import styles from './page.module.css';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const articles = getArticles();
  const article = articles.find((article) => article.id === params.id);

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
        {/* In a real app, this would be rendered from Markdown or HTML */}
        <p>{article.content}</p>
      </div>
    </article>
  );
}