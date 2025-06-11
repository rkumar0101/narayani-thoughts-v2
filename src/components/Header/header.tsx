// src/components/Header/Header.tsx
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Narayani Thoughts
        </Link>
      </div>
    </header>
  );
};

export default Header;