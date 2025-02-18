import styles from "./styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Card = ({
  image,
  name,
  description,
}: {
  image: string;
  name?: string;
  description: string;
}) => {
  const t = useTranslations("lineup");
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Image src={image} alt="" width={419} height={719} />
          {name && <div className={`${styles.name} `}>{t(name)}</div>}
        </div>
        <div className={styles.flipCardBack}>
          {/* <div className={`${styles.name} `}>{t(name)}</div> */}
          <div className={`${styles.description} `}>{t(description)}</div>
        </div>
      </div>
    </div>
  );
};
