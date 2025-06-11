// src/components/ArticleCard/ArticleCard.tsx

import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.css';
import type { Article } from '@/lib/data';

export const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link href={`/articles/${article.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{article.category}</span>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <div className={styles.readMore}>Read More &rarr;</div>
      </div>
    </Link>
  );
};