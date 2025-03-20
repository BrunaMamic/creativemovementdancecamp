import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export const Map = () => {
  const t = useTranslations("maps");
  return (
    <div className={styles.mainWrapper} id="location">
      <div className={styles.wrapper}>
        <h1 className={styles.mainTitle}>{t("mainTitle")}</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.699905302186!2d16.447487776370657!3d43.526127860639924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e7247314787%3A0x328e9fcd81b71423!2sPomak%20centar!5e1!3m2!1shr!2shr!4v1742472991800!5m2!1shr!2shr"
          width="600"
          height="650"
          style={{ border: 0, width: "100%", height: "650px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};
