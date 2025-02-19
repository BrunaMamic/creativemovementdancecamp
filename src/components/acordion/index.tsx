"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
// import { useTranslations } from "use-intl";

export const Acordion = () => {
  const [opened, setOpened] = useState<number>(0);
  // const t = useTranslations("home.accordion");

  const content = [
    {
      name: "“MOVE FULL OUT“ - ADULT CREATIVES ",
      info: "20 classes",
      price: "270 €",
    },
    {
      name: "“MOVE FULL OUT“ - YOUNG CREATIVES ",
      info: "20 classes (+15 years)",
      price: "150 €",
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
      info: "10 classes Thursday and Saturday + battle entre fee Friday + Party",
      price: "190 €",
    },
    {
      name: "“BATTLE AND PARTY”",
      info: "Single entrée fee / participations + After Dj Party",
      price: "25 €",
    },
    {
      name: "“BATTLE SUPPORTERS”",
      info: "watch the battle and join the after party",
      price: "10 €",
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainTitle}>PRICES & PACKAGES</div>
      <div className={styles.wrapper}>
        {content.map((image, index) => (
          <div
            key={index}
            className={`${styles.container} ${opened === index && styles.opened}`}
            onClick={() => setOpened(index)}>
            <div className={styles.innerWrapper}>
              <p className={` ${styles.text}`}>{image.info}</p>
              <p className={` ${styles.text}`} style={{ fontWeight: "600" }}>
                {image.price}
              </p>
              <div className={styles.button}> REGISTER NOW </div>
            </div>
            <div className={styles.titleWrapper}>
              <h4 className={`heading3 ${styles.title} `}>{image.name}</h4>
            </div>
          </div>
        ))}
        <div className={styles.contact}>
          Have a question?{" "}
          <div className={styles.buttonContact}> CONTACT US </div>{" "}
        </div>
      </div>
    </div>
  );
};
