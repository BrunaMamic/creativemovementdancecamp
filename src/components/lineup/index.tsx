import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Card } from "./card";

export const Lineup = () => {
  const t = useTranslations("lineup");
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={`${styles.mainTitle} `}>{t("mainTitle")} </div>
        <div className={styles.grid}>
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/lineup2.webp"}
            description={"card1.description"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
          />

          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
          />
        </div>
      </div>
    </div>
  );
};
