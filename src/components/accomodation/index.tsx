import { Link } from "@/i18n/routing";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Accomodation = () => {
  const t = useTranslations("accommodation");
  return (
    <div className={styles.mainWrapper} id="accommodation">
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>{t("mainTitle")}</div>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={"/static/accomodation.jpeg"} alt="" fill />
          </div>
          <div className={styles.text}>
            <b>{t("text1")}</b> {t("text2")}
          </div>
          <div className={styles.info}>
            DESIGN HOSTEL ONE SPLIT
            <br />
            Morpurgova Poljana 2, 21000 Split, Croatia
          </div>
          <div className={styles.link}>
            <Link href={"https://designhostelone.com/"}>{t("button")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
