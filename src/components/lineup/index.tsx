"use client";

import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Card } from "./card";
import { useRef } from "react";

export const Lineup = () => {
  const t = useTranslations("lineup");
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.mainWrapper} id="creative-lineup">
      <div className={styles.wrapper}>
        <div className={`${styles.mainTitle} `}>{t("mainTitle")} </div>
        <div ref={gridRef} className={styles.grid}>
          <Card
            image={"/static/lineup/aleksandra.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/ana.webp"}
            description={"card2.description"}
            name={"card2.name"}
            style={"card2.style"}
          />
          <Card
            image={"/static/lineup/barbara.webp"}
            name={"card3.name"}
            description={"card3.description"}
            style={"card3.style"}
          />
          <Card
            image={"/static/lineup/danilo.webp"}
            name={"card4.name"}
            description={"card4.description"}
            style={"card4.style"}
          />
          <Card
            image={"/static/lineup/keron.webp"}
            name={"card5.name"}
            description={"card5.description"}
            style={"card5.style"}
          />
          <Card
            image={"/static/lineup/monika.webp"}
            name={"card6.name"}
            description={"card6.description"}
            style={"card6.style"}
          />
          <Card
            image={"/static/lineup/monja.webp"}
            name={"card7.name"}
            description={"card7.description"}
            style={"card7.style"}
          />
          <Card
            image={"/static/lineup/selasi.webp"}
            name={"card8.name"}
            description={"card8.description"}
            style={"card8.style"}
          />
          <Card
            image={"/static/lineup/sergii.webp"}
            name={"card9.name"}
            description={"card9.description"}
            style={"card9.style"}
          />
          <Card
            image={"/static/lineup/vedrana.webp"}
            name={"card10.name"}
            description={"card10.description"}
            style={"card10.style"}
          />
          <Card
            image={"/static/lineup/veronika.webp"}
            name={"card11.name"}
            description={"card11.description"}
            style={"card11.style"}
          />
        </div>
      </div>
    </div>
  );
};
