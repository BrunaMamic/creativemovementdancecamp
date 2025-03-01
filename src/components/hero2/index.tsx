"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";
import { CircleLogo } from "../circleLogo";

export const Hero2 = () => {
  const t = useTranslations("hero");

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.titles}>
        <div className={styles.title1}>{t("title1")}</div>
        <div className={styles.title2}>{t("title2")}</div>
        <div className={styles.title3}>{t("title3")}</div>
        <div className={styles.title4}>{t("title4")}</div>
      </div>
      <div className={styles.image}>
        <Image src={"/static/hero.webp"} alt={""} fill />
      </div>

      <CircleLogo />
    </div>
  );
};
