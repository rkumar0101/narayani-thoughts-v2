// src/components/Footer/Footer.tsx

import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.brand}>
            <h3 className={styles.logo}>Narayani Thoughts</h3>
            <p className={styles.tagline}>A Voice Born of Vision, Grounded in Truth.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.links}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#latest-articles">Articles</Link></li>
              <li><Link href="/vision">Submit a Vision</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className={styles.links}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Narayani Thoughts. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;