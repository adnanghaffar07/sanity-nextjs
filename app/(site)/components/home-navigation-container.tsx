"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import styles from './Navbar.module.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href={`/`} className="hover:underline my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d382e58784257b38ccca526b1322cf201dacdf4343ff92c6fe39c9ba7a1b1e?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
            className="self-start max-w-full aspect-[5] xl:w-[266px] w-[200px]"
          />
        </Link>
        <div className={styles.navToggle} onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <a href="/features" className={styles.navLink}>Home</a>
          </li>
          <li
            className={`${styles.navItem} ${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="#" className={`${styles.navLink} ${styles.dropbtn}`} onClick={toggleDropdown}>
              Services <FaAngleDown className={isDropdownOpen ? styles.rotated : ''} />
            </a>
            <div className={`${styles.dropdownContent} ${isDropdownOpen ? styles.dropdownActive : ''}`}>
              <div className={styles.menulist}>
                <div className={styles.box1}>
                  <h3>E-Commerce</h3>
                  <a href="#">Web Development</a>
                  <a href="#">Mobile Development</a>
                  <a href="#">QA & Testing</a>
                  <a href="#">Business Automation</a>
                </div>
                <div className={styles.box2}>
                  <h3>E-Commerce</h3>
                  <a href="#">Web Development</a>
                  <a href="#">Mobile Development</a>
                  <a href="#">QA & Testing</a>
                  <a href="#">Business Automation</a>
                </div>
                <div className={styles.box3}>
                  <h3>E-Commerce</h3>
                  <a href="#">Web Development</a>
                  <a href="#">Mobile Development</a>
                  <a href="#">QA & Testing</a>
                  <a href="#">Business Automation</a>
                </div>
              </div>
            </div>


          </li>
          <li className={styles.navItem}>
            <a href="/community" className={styles.navLink}>Life at CA</a>
          </li>
          <li className={styles.navItem}>
            <a href="/blog" className={styles.navLink}>Career</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={styles.navLink}>Blogs</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={styles.navLink}>Technologies</a>
          </li>
        </ul>
        <a
          className="flex gap-3 justify-between self-stretch px-4 py-2 text-xl bg-sky-500 rounded-full shadow-sm max-md:px-5"
          href="https://join.skype.com/invite/crU4cXW4bttb"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fac08cad98e0659b7b1fba8569319dcbc8cff9340fcddf511cabd61603becea7?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
            className="aspect-[0.97] w-[27px]"
          />
          <div className="my-auto text-nowrap">Let&rsquo;s Skype</div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
