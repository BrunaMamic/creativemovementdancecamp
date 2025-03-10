"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Organizer = () => {
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations("organizer");

  return (
    <div className={styles.mainWrapper} id="about">
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>{t("mainTitle")}</div>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/static/monika.webp"}
              alt="monika veselcic"
              width={350}
              height={400}
            />
            <div className={styles.name}>{t("name")}</div>
          </div>
          <div className={styles.about}>
            <span>{t("text1")}</span>
            <span>{t("text2")}</span>

            {!expanded && (
              <div
                onClick={() => setExpanded(true)}
                className={styles.seeMoreBtn}>
                {t("more")}
              </div>
            )}

            {expanded && (
              <>
                <span>{t("text3")}</span>
                <span>{t("text4")}</span>

                <button
                  onClick={() => setExpanded(false)}
                  className={styles.seeMoreBtn}>
                  {t("less")}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
