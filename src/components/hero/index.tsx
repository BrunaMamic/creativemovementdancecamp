"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";
import { CircleLogo } from "../circleLogo";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const t = useTranslations("hero");
  const ref = useRef(null);

  const handleScroll = () => {
    const image = document.getElementById("bg-image");

    if (image) {
      image.style.transform = `translateY(${scrollY / 5 - 200}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.titles}>
        <div className={styles.title1}>{t("title1")}</div>
        <div className={styles.title2}>{t("title2")}</div>
        <div className={styles.title3}>{t("title3")}</div>
        <div className={styles.title4}>{t("title4")}</div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.image} ref={ref}>
          <Image src={"/static/hero.jpg"} alt={""} fill id={"bg-image"} />
        </div>
      </div>

      <CircleLogo />
    </div>
  );
};
