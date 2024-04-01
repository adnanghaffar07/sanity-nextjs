"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/">
          <a className={styles.logo}>Sanity.io</a>
        </Link>
        <div className={styles.navToggle} onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="/features" passHref>
              <a className={styles.navLink}>Features</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/pricing" passHref>
              <a className={styles.navLink}>Pricing</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/docs" passHref>
              <a className={styles.navLink}>Docs</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/community" passHref>
              <a className={styles.navLink}>Community</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog" passHref>
              <a className={styles.navLink}>Blog</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" passHref>
              <a className={styles.navLink}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
