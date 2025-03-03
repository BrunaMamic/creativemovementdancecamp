import { Link } from "@/i18n/routing";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.basic}>
        <div className={styles.title}>CREATIVE MOVEMENT DANCE CAMP</div>
        <div className={styles.date}>16.7 - 20.7. 2025, SPLIT, CROATIA</div>
        <div className={styles.register}>REGISTER HERE</div>
      </div>

      <div className={styles.socials}>
        <div className={styles.connect}>
          CONNECT WITH US{" "}
          <Link
            href={"https://www.instagram.com/danceboxsplit/"}
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
        </div>
        <div className={styles.terms}>TERMS & CONDITIONS</div>
      </div>
    </div>
  );
};
