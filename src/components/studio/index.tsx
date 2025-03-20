import styles from "./styles.module.scss";
import Image from "next/image";
// import { useTranslations } from "next-intl";

export const Studio = () => {
  //   const t = useTranslations("studio");

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        {/* <div className={styles.mainTitle}>{t("mainTitle")}</div> */}
        <div className={styles.imageWrapper}>
          <Image src={"/static/dvorana.webp"} alt="pomak dvorana" fill />
        </div>
      </div>
    </div>
  );
};
