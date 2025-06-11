// src/components/ArticleCard/ArticleCard.tsx

import Link from 'next/link';
import styles from './ArticleCard.module.css';
import type { Article } from '@/lib/data'; // Import the Article type

// The component will accept a single 'article' object as a prop
export const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link href={`/articles/${article.id}`} className={styles.card}>
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.excerpt}>{article.excerpt}</p>
      <span className={styles.category}>{article.category}</span>
    </Link>
  );
};