"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.logo}>
          <Image
            src={"/static/whiteLogo.png"}
            alt="logo"
            width={83}
            height={80}
          />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#">CREATIVE LINEUP</a>
          </li>
          <li>
            <a href="#">SCHEDULE</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">PRICES & PACKAGES</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">ACCOMMODATION</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <a href="#" className={styles.register}>
              REGISTER HERE
            </a>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
          onClick={toggleMenu}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </nav>
      <div className={`${styles.menubar} ${menuOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <a href="#">CREATIVE LINEUP</a>
          </li>
          <li>
            <a href="#">SCHEDULE</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">PRICES & PACKAGES</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">ACCOMMODATION</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <a href="#" className={styles.register}>
              REGISTER HERE
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
