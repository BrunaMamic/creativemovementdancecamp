"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Card } from "./card";

export const Lineup = () => {
  const t = useTranslations("lineup");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile || !scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile || !scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={`${styles.mainTitle}`}>{t("mainTitle")}</div>

        {isMobile && <div className={styles.scrollCircle}> Scroll</div>}
        <div
          className={styles.grid}
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}>
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/lineup2.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
          <Card
            image={"/static/lineup/lineup1.webp"}
            name={"card1.name"}
            description={"card1.description"}
            style={"card1.style"}
          />
        </div>
      </div>
    </div>
  );
};
