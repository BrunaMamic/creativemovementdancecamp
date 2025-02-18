import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export const TextSection = () => {
  const t = useTranslations("textSection");

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>{t("text")}</div>
    </div>
  );
};
