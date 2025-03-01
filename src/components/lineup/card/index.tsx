"use client";

import type React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
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
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Track if we're dragging to prevent modal open on drag
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startX || !startY) return;

    const diffX = Math.abs(e.touches[0].clientX - startX);
    const diffY = Math.abs(e.touches[0].clientY - startY);

    // If moved more than 10px, consider it a drag
    if (diffX > 10 || diffY > 10) {
      setIsDragging(true);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging && isMobile) {
      setIsModalOpen(true);
    }
    setStartX(0);
    setStartY(0);
    setIsDragging(false);
  };

  const handleClick = () => {
    if (isMobile) {
      setIsModalOpen(true);
    } else {
      setIsFlipped(!isFlipped);
    }
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={`${styles.flipCard} ${isMobile ? styles.mobile : ""}`}
        ref={cardRef}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <div
          className={`${styles.flipCardInner} ${!isMobile && isFlipped ? styles.flipped : ""}`}>
          <div className={styles.flipCardFront}>
            <Image
              src={image || "/placeholder.svg"}
              alt=""
              width={419}
              height={719}
            />
            {name && <div className={`${styles.name}`}>{t(name)}</div>}
          </div>
          {!isMobile && (
            <div className={styles.flipCardBack} onClick={handleBackClick}>
              <div className={`${styles.name}`}>{t(name)}</div>
              <div className={`${styles.description}`}>{t(style)}</div>
              <div className={styles.button}>+ INFO</div>
            </div>
          )}
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
