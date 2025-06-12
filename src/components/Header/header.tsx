// src/components/Header/Header.tsx (Corrected Code)

"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const categoryLinks = [
  { name: 'Geopolitics', href: '/geopolitics' },
  { name: 'Politics', href: '/politics' },
  { name: 'Science', href: '/science' },
  { name: 'Society', href: '/society' },
  { name: 'Vision', href: '/vision' },
];

// vvv THIS ARRAY IS NOW CORRECT vvv
const otherLinks = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Narayani Thoughts
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li 
              className={styles.dropdownContainer}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={styles.navLink}>
                Categories
              </button>
              {isDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  {categoryLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className={styles.dropdownLink}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {otherLinks.map((link) => (
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