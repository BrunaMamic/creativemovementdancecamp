"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

const TermsConditions = () => {
  const t = useTranslations("terms");

  return (
    <div className={styles.container}>
      <h1>{t("title")}</h1>
      <section>
        <h2>{t("health.title")}</h2>
        <ul>
          <li>{t("health.point1")}</li>
          <li>{t("health.point2")}</li>
          <li>{t("health.point3")}</li>
        </ul>
      </section>
      <section>
        <h2>{t("belongings.title")}</h2>
        <ul>
          <li>{t("belongings.point1")}</li>
          <li>{t("belongings.point2")}</li>
        </ul>
      </section>
      <section>
        <h2>{t("behavior.title")}</h2>
        <ul>
          <li>{t("behavior.point1")}</li>
          <li>{t("behavior.point2")}</li>
          <li>{t("behavior.point3")}</li>
          <li>{t("behavior.point4")}</li>
        </ul>
      </section>
      <section>
        <h2>{t("substances.title")}</h2>
        <ul>
          <li>{t("substances.point1")}</li>
        </ul>
      </section>
      <section>
        <h2>{t("media.title")}</h2>
        <ul>
          <li>{t("media.point1")}</li>
          <li>{t("media.point2")}</li>
        </ul>
      </section>
      <section>
        <h2>{t("privacy.title")}</h2>
        <ul>
          <li>{t("privacy.point1")}</li>
          <li>{t("privacy.point2")}</li>
        </ul>
      </section>
      <p>{t("agreement")}</p>
    </div>
  );
};

export default TermsConditions;
