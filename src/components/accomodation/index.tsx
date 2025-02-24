import { Link } from "@/i18n/routing";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Accomodation = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>ACCOMMODATION PROPOSAL</div>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={"/static/accomodation.jpeg"} alt="" fill />
          </div>
          <div className={styles.text}>
            <b>Hostel ONE</b> is the perfect place to stay for travelers who are
            looking for great value hostel experience in a premium location in
            old town. Located within Diocletian palace and just next to Split
            Riva – you are short walking distance from all the attractions and
            restaurants that old town has to offer.
          </div>
          <div className={styles.info}>
            DESIGN HOSTEL ONE SPLIT
            <br />
            Morpurgova Poljana 2, 21000 Split, Croatia
          </div>
          <div className={styles.link}>
            <Link href={"https://designhostelone.com/"}>CLICK TO SEE MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
