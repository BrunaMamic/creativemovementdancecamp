"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Modal } from "../modal";

export const Card = ({
  image,
  name,
  description,
  style,
}: {
  image: string;
  name?: string;
  description: string;
  style?: string;
}) => {
  const t = useTranslations("lineup");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1);
      }
    }
  }, [isModalOpen]);

  const handleCardClick = () => {
    if (isMobile) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={`${styles.flipCard} ${isMobile ? styles.mobileCard : ""}`}
        onClick={isMobile ? handleCardClick : undefined}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <Image
              src={image || "/placeholder.svg"}
              alt=""
              width={419}
              height={719}
            />
          </div>
          {!isMobile && (
            <div
              className={styles.flipCardBack}
              onClick={() => setIsModalOpen(true)}>
              <div className={`${styles.name} `}>{t(name)}</div>
              <div className={`${styles.description} `}>{t(style)}</div>
              <div className={styles.button}>+ INFO</div>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        // name={t(name)}
        description={t(description)}
        image={image}
      />
    </>
  );
};
