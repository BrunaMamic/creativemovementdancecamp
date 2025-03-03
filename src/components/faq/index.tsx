"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export const Faq = () => {
  const t = useTranslations("faq");
  const [openedQuestion, setOpenedQuestion] = useState<number | null>(null);

  useEffect(() => {
    [0, 1, 2, 3, 4].forEach((index) => {
      const el = document.getElementById(`faq__${index}`);
      if (el) {
        el.style.maxHeight =
          index === openedQuestion ? `${el.scrollHeight}px` : "0px";
      }
    });
  }, [openedQuestion]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>Have a question?</div>
        <div className={styles.questions}>
          {/* FAQ 1 */}
          <div
            className={styles.faq}
            onClick={() =>
              setOpenedQuestion((prev) => (prev === 0 ? null : 0))
            }>
            <div className={styles.question}>
              <span>{t("q1")}</span>
              <div
                className={`${styles.icon} ${openedQuestion === 0 ? styles.iconRotated : ""}`}>
                +
              </div>
            </div>
            <div
              className={`${styles.answer} ${openedQuestion === 0 && styles.answerShown}`}
              id="faq__0">
              {t("a1")}
            </div>
          </div>

          {/* FAQ 2 */}
          <div
            className={styles.faq}
            onClick={() =>
              setOpenedQuestion((prev) => (prev === 1 ? null : 1))
            }>
            <div className={styles.question}>
              <span>{t("q2")}</span>
              <div
                className={`${styles.icon} ${openedQuestion === 1 ? styles.iconRotated : ""}`}>
                +
              </div>
            </div>
            <div
              className={`${styles.answer} ${openedQuestion === 1 && styles.answerShown}`}
              id="faq__1">
              {t("a2")}
            </div>
          </div>

          {/* FAQ 3 */}
          <div
            className={styles.faq}
            onClick={() =>
              setOpenedQuestion((prev) => (prev === 2 ? null : 2))
            }>
            <div className={styles.question}>
              <span>{t("q3")}</span>
              <div
                className={`${styles.icon} ${openedQuestion === 2 ? styles.iconRotated : ""}`}>
                +
              </div>
            </div>
            <div
              className={`${styles.answer} ${openedQuestion === 2 && styles.answerShown}`}
              id="faq__2">
              {t("a3")}
            </div>
          </div>

          {/* FAQ 4 */}
          <div
            className={styles.faq}
            onClick={() =>
              setOpenedQuestion((prev) => (prev === 3 ? null : 3))
            }>
            <div className={styles.question}>
              <span>{t("q4")}</span>
              <div
                className={`${styles.icon} ${openedQuestion === 3 ? styles.iconRotated : ""}`}>
                +
              </div>
            </div>
            <div
              className={`${styles.answer} ${openedQuestion === 3 && styles.answerShown}`}
              id="faq__3">
              {t("a4")}
            </div>
          </div>

          {/* FAQ 5 */}
          <div
            className={styles.faq}
            onClick={() =>
              setOpenedQuestion((prev) => (prev === 4 ? null : 4))
            }>
            <div className={styles.question}>
              <span>{t("q5")}</span>
              <div
                className={`${styles.icon} ${openedQuestion === 4 ? styles.iconRotated : ""}`}>
                +
              </div>
            </div>
            <div
              className={`${styles.answer} ${openedQuestion === 4 && styles.answerShown}`}
              id="faq__4">
              {t("a5")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
