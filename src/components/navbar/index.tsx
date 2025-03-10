"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { usePathname as useNextPath } from "next/navigation";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar");
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
          <Link href={"/"}>
            <Image
              src={"/static/whiteLogo.png"}
              alt="logo"
              width={83}
              height={80}
            />
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/#creative-lineup">{t("link1")}</Link>
          </li>
          <li>
            <Link href="/#schedule">{t("link2")}</Link>
          </li>
          <li>
            <Link href="/#location">{t("link3")}</Link>
          </li>
          <li>
            <Link href="/#prices">{t("link4")}</Link>
          </li>
          <li>
            <Link href="/#about">{t("link5")}</Link>
          </li>
          <li>
            <Link href="/#accommodation">{t("link6")}</Link>
          </li>
          <li>
            <Link href="/#contact">{t("link7")}</Link>
          </li>
          <li>
            <Link href="/register-here" className={styles.register}>
              {t("link8")}
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
              {t("link1")}
            </Link>
          </li>
          <li>
            <Link href="/#schedule" onClick={() => setMenuOpen(false)}>
              {t("link2")}
            </Link>
          </li>
          <li>
            <Link href="/#location" onClick={() => setMenuOpen(false)}>
              {t("link3")}
            </Link>
          </li>
          <li>
            <Link href="/#prices" onClick={() => setMenuOpen(false)}>
              {t("link4")}
            </Link>
          </li>
          <li>
            <Link href="/#about" onClick={() => setMenuOpen(false)}>
              {t("link5")}
            </Link>
          </li>
          <li>
            <Link href="/#accommodation" onClick={() => setMenuOpen(false)}>
              {t("link6")}
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>
              {t("link7")}
            </Link>
          </li>
          <li>
            <Link
              href="/register-here"
              className={styles.register}
              onClick={() => setMenuOpen(false)}>
              {t("link8")}
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
