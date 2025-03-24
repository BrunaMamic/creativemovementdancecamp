"use client";

import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Card } from "./card";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export const Lineup = () => {
  const t = useTranslations("lineup");
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.mainWrapper} id="creative-lineup">
      <div className={styles.wrapper}>
        <div className={`${styles.mainTitle} `}>{t("mainTitle")} </div>
        {isMobile && (
          <div className={styles.swipe}>
            {" "}
            <ArrowRight color="var(--white)" />{" "}
          </div>
        )}
        <div ref={gridRef} className={styles.grid}>
          <Card
              image={"/static/lineup/selasi1.webp"}
              name={"card8.name"}
              description={"card8.description"}
              style={"card8.style"}
          />
          <Card
              image={"/static/lineup/kelan1.webp"}
              name={"card5.name"}
              description={"card5.description"}
              style={"card5.style"}
          />
          <Card
              image={"/static/lineup/veronika1.webp"}
              name={"card11.name"}
              description={"card11.description"}
              style={"card11.style"}
          />
          <Card
            image={"/static/lineup/aleksandra1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/ana1.webp"}
            description={"card2.description"}
            name={"card2.name"}
            style={"card2.style"}
          />
          <Card
            image={"/static/lineup/barbara1.webp"}
            name={"card3.name"}
            description={"card3.description"}
            style={"card3.style"}
          />
          <Card
            image={"/static/lineup/danilo1.webp"}
            name={"card4.name"}
            description={"card4.description"}
            style={"card4.style"}
          />

          <Card
            image={"/static/lineup/monika1.webp"}
            name={"card6.name"}
            description={"card6.description"}
            style={"card6.style"}
          />
          <Card
            image={"/static/lineup/monja1.webp"}
            name={"card7.name"}
            description={"card7.description"}
            style={"card7.style"}
          />

          <Card
            image={"/static/lineup/sergi1.webp"}
            name={"card9.name"}
            description={"card9.description"}
            style={"card9.style"}
          />
          <Card
            image={"/static/lineup/vedrana1.webp"}
            name={"card10.name"}
            description={"card10.description"}
            style={"card10.style"}
          />

        </div>
      </div>
    </div>
  );
};
