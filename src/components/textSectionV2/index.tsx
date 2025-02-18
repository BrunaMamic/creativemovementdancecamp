import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export const TextSectionV2 = () => {
  const t = useTranslations("textSection");

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>{t("text2")}</div>
    </div>
  );
};
