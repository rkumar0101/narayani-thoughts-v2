// src/components/Header/Header.tsx

import Link from 'next/link';
import styles from './Header.module.css';

// Define our navigation links in an array for easy management
const navLinks = [
  { name: 'Geopolitics', href: '/geopolitics' },
  { name: 'Politics', href: '/politics' },
  { name: 'Science', href: '/science' },
  { name: 'Society', href: '/society' },
  { name: 'Vision', href: '/vision' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Narayani Thoughts
        </Link>

        {/* Our new navigation menu */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;