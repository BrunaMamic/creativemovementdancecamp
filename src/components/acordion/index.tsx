"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
// import { useTranslations } from "use-intl";

export const Acordion = () => {
  const t = useTranslations("schedule");

  // const [openedJr, setOpenedJr] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<
    "adults" | "juniors"
  >("adults");

  // const t = useTranslations("home.accordion");

  const content = [
    {
      name: "“MOVE FULL OUT“ - ADULT CREATIVES ",
      info: "20 classes",
      price: "290 €",
    },
    {
      name: "“MOVE ONE DAY” ",
      info: "5 classes",
      price: "90 €",
    },
    {
      name: "“DANCE SLEEP REPEAT”",
      info: "20 classes + 4 nights in Design Hostel One Split",
      price: "490 €",
    },
    {
      name: "“BATTLE MOVERS”",
      info: "10 classes (17.07 - 19.07) + Battle Enterance",
      price: "190 €",
    },
    {
      name: "“EARLY BIRD”",
      info: "20 CLASSES ",
      circle: "10 spots",
      price: "240 €",
    },
  ];

  const contentJr = [
    {
      name: "“MOVE FULL OUT“ - YOUNG CREATIVES ",
      info: "10 CLASSES ",
      price: "150 €",
    },
    {
      name: "“DANCE SLEEP REPEAT”",
      info: "10 CLASSES + 4 nights in Design Hostel One Split",
      price: "350 €",
    },
    {
      name: "“EARLY BIRD”",
      info: "10 CLASSES ",
      circle: "10 spots",
      price: "100 €",
    },
  ];
  const pricingData = selectedCategory === "adults" ? content : contentJr;

  const [opened, setOpened] = useState<number>(contentJr.length - 1);

  return (
    <div className={styles.mainWrapper} id="prices">
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>PRICES & PACKAGES</div>
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
              <div className={styles.miniInfo}> *Age 15 + </div>
            ) : (
              <div className={styles.miniInfo}> *Up to 15 y.o. </div>
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
                    <Link href={"/register-here"}>REGISTER NOW </Link>{" "}
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
          Have a question?{" "}
          <div className={styles.buttonContact}>
            <Link href={"#contact"}>CONTACT US </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
