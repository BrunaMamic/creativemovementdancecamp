"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
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

  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <Image src={image} alt="" width={419} height={719} />
            {name && <div className={`${styles.name} `}>{t(name)}</div>}
          </div>
          <div
            className={styles.flipCardBack}
            onClick={() => setIsModalOpen(true)}>
            <div className={`${styles.name} `}>{t(name)}</div>
            <div className={`${styles.description} `}>{t(style)}</div>

            <div className={styles.button}>+ INFO</div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={t(name)}
        description={t(description)}
        image={image}
      />
    </>
  );
};
