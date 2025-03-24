"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

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
          <div className={styles.mainTitle}>{t("mainTitle")}</div>
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
                <p>{t("a1.intro")}</p>
                <br/>

                <p>
                  <strong>{t("a1.youngCreatives.title")}</strong>
                  <br />
                  <span style={{marginLeft: "30px"}}>
                  {t("a1.youngCreatives.description")}

                  </span>
                </p>
                <br/>
                <p>
                  <strong>{t("a1.adultCreatives.title")}</strong>
                  <br />
                  <span style={{marginLeft: "30px"}}>
                  {t("a1.adultCreatives.description1")}

                  </span>
                  <br />
                  <span style={{marginLeft: "30px"}}>
                  {t("a1.adultCreatives.description2")}

                  </span>
                  <br />
                  <span style={{marginLeft: "30px"}}>
                  {t("a1.adultCreatives.description3")}

                  </span>
                </p>
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
                <p>{t("a2.intro")}</p>
                <br />
                <b style={{ marginBottom: "10px" }}>{t('a2.important')}</b>
                <p style={{ marginLeft: "30px" }}>• {t("a2.paymentDeadline")}</p>
                <p style={{ marginLeft: "30px" }}>• {t("a2.transactionDetails")}</p>
                <br />
                <p>{t("a2.inquiries")}</p>
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
                  id="faq__2"
              >
                <p style={{ marginLeft: "30px" }}>• {t("a3.modificationPeriod")}</p>
                <br/>
                <p style={{ marginLeft: "30px" }}>• {t("a3.organizerRights")}</p>
                <br/>
                <p style={{ marginLeft: "30px" }}>• {t("a3.refundPolicy")}</p>
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
                  id="faq__3"
              >
                <p>{t("a4.intro")}</p>
                <br />
                <p style={{ marginLeft: "30px" }}>
                  <strong>{t("a4.discount6to10")}</strong>
                </p>
                <p style={{ marginLeft: "30px" }}>
                  <strong>{t("a4.discount10to15")}</strong>
                </p>
                <br />
                <p>{t("a4.groupApplication")}</p>
                <br />
                <p>
                  <strong>{t("a4.note")}</strong>
                </p>
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
                <p>{t("a5.intro")}</p>
                  <Link href={'/#accommodation'} style={{ textDecoration: "underline" }}>
                    {t("a5.link")}

                  </Link>
                  {t("a5.link2")}
                <p>
                  {t("a5.breakfast1")} <b>{t("a5.breakfast2")} </b>  {t("a5.breakfast3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
