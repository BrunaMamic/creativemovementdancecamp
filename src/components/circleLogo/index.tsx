"use client";

import { useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const CircleLogo = () => {
  const handleScroll = () => {
    const logo = document.getElementById("spinning-logo");
    if (logo) {
      logo.style.transform = `rotate(${window.scrollY / 15}deg)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.logoWrapper} id={"spinning-logo"}>
        <Image
          src={"/static/whiteLogo.png"}
          alt={""}
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};
