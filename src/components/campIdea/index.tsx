"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { useState } from "react";

export const CampIdea = () => {
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations("idea");
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>{t("mainTitle")}</div>
        <div className={styles.text}>
          <span>
            {t("text1")} <b>{t("text2")}</b> {t("text3")}
          </span>

          {!expanded && (
            <div
              onClick={() => setExpanded(true)}
              className={styles.seeMoreBtn}>
              {t("more")}
            </div>
          )}

          {expanded && (
            <>
              <span>{t("text4")}</span>
              <span>{t("text5")}</span>

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
  );
};
