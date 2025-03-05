"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Link } from "@/i18n/routing";

interface TimeDisplayValuesType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CounterType {
  displayValue: number;
  label: string;
}

const generateTimeDisplay = (): TimeDisplayValuesType => {
  const nextYear = new Date().getFullYear();
  const targetDate = new Date(`July 16, ${nextYear} 09:00:00`).getTime();
  const rightJustNow = new Date().getTime();
  const runway = targetDate - rightJustNow;

  return {
    days: Math.floor(runway / (1000 * 60 * 60 * 24)),
    hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((runway % (1000 * 60)) / 1000),
  };
};

const Counter = ({ displayValue, label }: CounterType) => (
  <div className={styles.counter}>
    <h2>{label}</h2>
    {displayValue}
  </div>
);

export default function CounterTime() {
  // Use null as initial state to indicate we haven't calculated time yet
  const [timeDisplay, setTimeDisplay] = useState<TimeDisplayValuesType | null>(
    null
  );
  // Track if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true after component mounts on client
  useEffect(() => {
    setIsMounted(true);
    setTimeDisplay(generateTimeDisplay());
  }, []);

  // Only start the interval after component is mounted
  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setTimeDisplay(generateTimeDisplay());
    }, 1000);

    return () => clearInterval(interval);
  }, [isMounted]);

  // Show a placeholder or nothing until client-side code runs
  if (!timeDisplay) {
    return null; // Or a loading state if preferred
  }

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <section className={styles.container}>
          <header className={styles.mainTitle}>Are you coming?</header>
          <div className={styles.wrapper2}>
            <Counter displayValue={timeDisplay.days} label={"Days"} />
            <Counter displayValue={timeDisplay.hours} label={"Hours"} />
            <Counter displayValue={timeDisplay.minutes} label={"Minutes"} />
            <Counter displayValue={timeDisplay.seconds} label={"Seconds"} />
          </div>
        </section>
        <div className={styles.socials}>
          <div className={styles.socTitle}>Check us out </div>
          <div className={styles.icons}>
            <Link
              href={"https://www.instagram.com/creative_move_camp/"}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={30}
                height={30}
                src="/static/icons/instagram-svgrepo-com.svg"
                alt="instagram logo"
              />
            </Link>
            <Link
              href={
                "https://www.facebook.com/events/s/creative-movement-dance-camp/2477676299259812/"
              }
              target="_blank"
              rel="noopener noreferrer">
              <Image
                width={30}
                height={30}
                src="/static/icons/facebook-svgrepo-com.svg"
                alt="instagram logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
