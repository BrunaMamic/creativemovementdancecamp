"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { usePathname as useNextPath } from "next/navigation";
import { Link, usePathname } from "@/i18n/routing";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathWithLocale = useNextPath();
  const getLng = pathWithLocale.includes("hr") ? "hr" : "en";
  const [language, setLanguage] = useState(getLng);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
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
            <Link href="/#creative-lineup">CREATIVE LINEUP</Link>
          </li>
          <li>
            <Link href="/#schedule">SCHEDULE</Link>
          </li>
          <li>
            <Link href="/#location">LOCATION</Link>
          </li>
          <li>
            <Link href="/#prices">PRICES & PACKAGES</Link>
          </li>
          <li>
            <Link href="/#about">ABOUT US</Link>
          </li>
          <li>
            <Link href="/#accommodation">ACCOMMODATION</Link>
          </li>
          <li>
            <Link href="/#contact">CONTACT US</Link>
          </li>
          <li>
            <Link href="/register-here" className={styles.register}>
              REGISTER HERE
            </Link>
          </li>
          <div className={`${styles.languageWrapper}`}>
            <Link
              href={pathname}
              locale={"en"}
              onMouseEnter={() => setLanguage("en")}
              onMouseLeave={() => setLanguage(getLng)}>
              <div className={`${language === "en" && styles.highlight}`}>
                EN
              </div>
            </Link>
            &nbsp;/&nbsp;
            <Link
              href={pathname}
              locale={"hr"}
              onMouseEnter={() => setLanguage("hr")}
              onMouseLeave={() => setLanguage(getLng)}>
              <div className={`${language === "hr" && styles.highlight}`}>
                HR
              </div>
            </Link>
            <div
              className={`${styles.floatingLine} ${
                language === "hr" && styles.floatRight
              }`}
            />
          </div>
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
            <Link href="/#creative-lineup" onClick={() => setMenuOpen(false)}>
              CREATIVE LINEUP
            </Link>
          </li>
          <li>
            <Link href="/#schedule" onClick={() => setMenuOpen(false)}>
              SCHEDULE
            </Link>
          </li>
          <li>
            <Link href="/#location" onClick={() => setMenuOpen(false)}>
              LOCATION
            </Link>
          </li>
          <li>
            <Link href="/#prices" onClick={() => setMenuOpen(false)}>
              PRICES & PACKAGES
            </Link>
          </li>
          <li>
            <Link href="/#about" onClick={() => setMenuOpen(false)}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/#accommodation" onClick={() => setMenuOpen(false)}>
              ACCOMMODATION
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>
              CONTACT US
            </Link>
          </li>
          <li>
            <Link
              href="/register-here"
              className={styles.register}
              onClick={() => setMenuOpen(false)}>
              REGISTER HERE
            </Link>
          </li>
          <div className={`${styles.languageWrapper}`}>
            <Link
              href={pathname}
              locale={"en"}
              onMouseEnter={() => setLanguage("en")}
              onMouseLeave={() => setLanguage(getLng)}>
              <div className={`${language === "en" && styles.highlight}`}>
                EN
              </div>
            </Link>
            &nbsp;/&nbsp;
            <Link
              href={pathname}
              locale={"hr"}
              onMouseEnter={() => setLanguage("hr")}
              onMouseLeave={() => setLanguage(getLng)}>
              <div className={`${language === "hr" && styles.highlight}`}>
                HR
              </div>
            </Link>
            <div
              className={`${styles.floatingLine} ${
                language === "hr" && styles.floatRight
              }`}
            />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
