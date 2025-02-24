"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export const createArrayFromNumber = (n: number) => {
  return Array.from(Array(n).keys());
};

export const Faq = () => {
  const t = useTranslations("faq");
  const [openedQuestion, setOpenedQuestion] = useState<number | null>(null);

  useEffect(() => {
    createArrayFromNumber(7).forEach((x, index: number) => {
      const el = document.getElementById(`faq__${index}`);
      if (el) {
        if (index === openedQuestion) {
          el.style.maxHeight = `${el.scrollHeight}px`;
        } else {
          el.style.maxHeight = "0px";
        }
      }
    });
  }, [openedQuestion]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>Have a question?</div>
        <div className={styles.questions}>
          {createArrayFromNumber(7).map((x) => {
            return (
              <div
                key={`faq__${x}`}
                className={styles.faq}
                onClick={() =>
                  setOpenedQuestion((prevState) => (prevState === x ? null : x))
                }>
                <div className={styles.question}>
                  <span>{t(`q${x + 1}`)}</span>
                  <div
                    className={`${styles.icon} ${openedQuestion === x ? styles.iconRotated : ""}`}>
                    +
                  </div>
                </div>
                <div
                  className={`${styles.answer} ${openedQuestion === x && styles.answerShown}`}
                  id={`faq__${x}`}>
                  {t(`a${x + 1}`)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
