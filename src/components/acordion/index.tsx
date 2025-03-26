"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
// import { useTranslations } from "use-intl";

export const Acordion = () => {
  const t = useTranslations("accordion");

  // const [openedJr, setOpenedJr] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<
    "adults" | "juniors"
  >("adults");

  // const t = useTranslations("home.accordion");

  const content = [

    {
      name: t('adultsGroup.class1.name'),
      info: t('adultsGroup.class1.number'),
      price: "290 €",
    },


    {
      name: t('adultsGroup.class2.name'),
      info: t('adultsGroup.class2.number'),
      price: "90 €",
    },


    {
      name: t('adultsGroup.class3.name'),
      info: t('adultsGroup.class3.number'),
      price: "490 €",
    },


    {
      name: t('adultsGroup.class4.name'),
      info: t('adultsGroup.class4.number'),
      price: "190 €",
    },


    {
      name: t('adultsGroup.class5.name'),
      info: t('adultsGroup.class5.number'),
      circle: t('adultsGroup.class5.circle'),
      price: "240 €",
    },
  ];

  const contentJr = [
    {
      name: t('youngGroup.class1.name'),
      info: t('youngGroup.class1.number'),
      price: "150 €",
    },
    {
      name: t('youngGroup.class2.name'),
      info: t('youngGroup.class2.number'),
      price: "350 €",
    },
    {
      name: t('youngGroup.class3.name'),
      info: t('youngGroup.class3.number'),
      circle: t('youngGroup.class3.circle'),
      price: "100 €",
    },
  ];
  const pricingData = selectedCategory === "adults" ? content : contentJr;

  const [opened, setOpened] = useState<number>(0);

  return (
    <div className={styles.mainWrapper} id="prices">
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>{t("mainTitle")}</div>
        <div className={styles.infoWrapper}>
          <div className={styles.buttons}>
            <div
              className={`${styles.buttonCat} ${selectedCategory === "juniors" ? styles.active : ""}`}
              onClick={() => setSelectedCategory("juniors")}>
              {t("juniors")}
            </div>
            <div
              className={`${styles.buttonCat} ${selectedCategory === "adults" ? styles.active : ""}`}
              onClick={() => setSelectedCategory("adults")}>
              {t("adults")}
            </div>
            {selectedCategory === "adults" ? (
              <div className={styles.miniInfo}> {t("miniInfo1")} </div>
            ) : (
              <div className={styles.miniInfo}> {t("miniInfo2")} </div>
            )}
          </div>
          <div className={styles.accordion}>
            {pricingData.map((image, index) => (
              <div
                key={index}
                className={`${styles.container} ${opened === index && styles.opened}`}
                onClick={() => setOpened(index)}>
                <div className={styles.innerWrapper}>
                  <p className={` ${styles.text}`}>{image.info}</p>
                  <p
                    className={` ${styles.text}`}
                    style={{ fontWeight: "600" }}>
                    {image.price}
                  </p>
                  {image.circle && (
                    <div className={styles.circle}>{image.circle}</div>
                  )}
                  <div className={styles.button}>
                    {" "}
                    <Link href={"/register-here"}>{t("register")} </Link>{" "}
                  </div>
                </div>
                <div className={styles.titleWrapper}>
                  <h4 className={`heading3 ${styles.title} `}>{image.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.contact}>
          {t("contactTitle")}
          <div className={styles.buttonContact}>
            <Link href={"#contact"}>{t("contactButton")} </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
