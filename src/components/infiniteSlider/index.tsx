import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export const InfiniteSlider = () => {
  const t = useTranslations("slider");

  const elements = [
    t("element1"),
    t("element2"),
    t("element3"),
    t("element4"),
    t("element5"),
    t("element6"),
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.rowWrapper}>
        <div className={styles.firstRow}>
          {[...elements, ...elements].map((text, index) => (
            <div key={index} className={styles.element}>
              {text}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rowWrapper}>
        <div className={styles.secondRow}>
          {[...elements, ...elements].map((text, index) => (
            <div key={index} className={styles.element}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
