"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
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
      price: "270 €",
    },
    // {
    //   name: "“MOVE FULL OUT“ - YOUNG CREATIVES ",
    //   info: "20 classes (+15 years)",
    //   price: "150 €",
    // },
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
      info: "10 classes Thursday and Saturday + battle entre fee Friday + Party",
      price: "190 €",
    },
    {
      name: "“EARLY BIRD”",
      info: "20 CLASSES ",
      circle: "10 spots",
      price: "190 €",
    },
    // {
    //   name: "“BATTLE AND PARTY”",
    //   info: "Single entrée fee / participations + After Dj Party",
    //   price: "25 €",
    // },
    // {
    //   name: "“BATTLE SUPPORTERS”",
    //   info: "watch the battle and join the after party",
    //   price: "10 €",
    // },
  ];

  const contentJr = [
    {
      name: "“MOVE FULL OUT“ - YOUNG CREATIVES ",
      info: "20 classes",
      price: "270 €",
    },
    // {
    //   name: "“MOVE FULL OUT“ - YOUNG CREATIVES ",
    //   info: "20 classes (+15 years)",
    //   price: "150 €",
    // },
    {
      name: "“DANCE SLEEP REPEAT”",
      info: "20 classes + 4 nights in Design Hostel One Split",
      price: "490 €",
    },
    {
      name: "“EARLY BIRD”",
      info: "20 CLASSES ",
      circle: "10 spots",
      price: "190 €",
    },
    // {
    //   name: "“BATTLE AND PARTY”",
    //   info: "Single entrée fee / participations + After Dj Party",
    //   price: "25 €",
    // },
    // {
    //   name: "“BATTLE SUPPORTERS”",
    //   info: "watch the battle and join the after party",
    //   price: "10 €",
    // },
  ];
  const pricingData = selectedCategory === "adults" ? content : contentJr;

  const [opened, setOpened] = useState<number>(contentJr.length - 1);

  return (
    <div className={styles.mainWrapper}>
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
                  <div className={styles.button}> REGISTER NOW </div>
                </div>
                <div className={styles.titleWrapper}>
                  <h4 className={`heading3 ${styles.title} `}>{image.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={styles.adultsTitle}>
          JUNIORS CREATIVES (AGE UP TO 15 Y.O.)
        </div>
        <div className={styles.accordion}>
          {contentJr.map((image, index) => (
            <div
              key={index}
              className={`${styles.container} ${openedJr === index && styles.opened}`}
              onClick={() => setOpenedJr(index)}>
              <div className={styles.innerWrapper}>
                <p className={` ${styles.text}`}>{image.info}</p>
                <p className={` ${styles.text}`} style={{ fontWeight: "600" }}>
                  {image.price}
                </p>
                {image.circle && (
                  <div className={styles.circle}>{image.circle}</div>
                )}
                <div className={styles.button}> REGISTER NOW </div>
              </div>
              <div className={styles.titleWrapper}>
                <h4 className={`heading3 ${styles.title} `}>{image.name}</h4>
              </div>
            </div>
          ))}
        </div> */}

        <div className={styles.contact}>
          Have a question?{" "}
          <div className={styles.buttonContact}> CONTACT US </div>{" "}
        </div>
      </div>
    </div>
  );
};
