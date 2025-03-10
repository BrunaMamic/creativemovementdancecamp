"use client";

import { Link } from "@/i18n/routing";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.basic}>
        <div className={styles.title}>{t("title")}</div>
        <div className={styles.date}>16.7 - 20.7. 2025</div>
        <div className={styles.date}>{t("loc")}</div>

        <div className={styles.register}>
          <Link href={"/register-here"}>{t("button")}</Link>
        </div>
        <div className={styles.terms}>
          {" "}
          <Link href={"/terms-and-conditions"}>{t("terms")}</Link>
        </div>
      </div>

      <div className={styles.socials}>
        <div className={styles.connect}>
          {t("connect")}{" "}
          <Link
            href={"https://www.instagram.com/creative_move_camp/"}
            target="_blank"
            rel="noopener noreferrer">
            <div className={styles.inst}>
              <Image
                width={30}
                height={30}
                src="/static/icons/instagram-svgrepo-com.svg"
                alt="instagram logo"
              />
            </div>
          </Link>{" "}
          <Link
            href={
              "https://www.facebook.com/events/s/creative-movement-dance-camp/2477676299259812/"
            }
            target="_blank"
            rel="noopener noreferrer">
            <div className={styles.inst}>
              <Image
                width={30}
                height={30}
                src="/static/icons/facebook-svgrepo-com.svg"
                alt="instagram logo"
              />
            </div>
          </Link>
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                `whatsapp://send?text=Hi There! I have a question about...&phone=+385919464064`
              )
            }>
            <div className={styles.inst}>
              <Image
                width={30}
                height={30}
                src="/static/icons/whatsapp-svgrepo-com.svg"
                alt="instagram logo"
              />
            </div>
          </div>
          <span className={styles.miniInfo}>{t("miniInfo")}</span>
        </div>
      </div>
    </div>
  );
};
