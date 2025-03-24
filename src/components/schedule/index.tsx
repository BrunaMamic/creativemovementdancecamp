"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Schedule = () => {
  const t = useTranslations("schedule");
  const [selectedCategory, setSelectedCategory] = useState<
    "adults" | "juniors"
  >("adults");

  const [expandedDays, setExpandedDays] = useState<number[]>([]);

  const toggleDay = (index: number) => {
    setExpandedDays((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const contentAdults = [
    {
      day: "WED",
      date: "16",
      event: [
        {
          time: "9:30",
          what: "Studio open",
        },
        {
          time: "10:30 - 11:30",
          what: "Class 1",
        },
        {
          time: "11:45 - 13:15",
          what: "Class 2",
        },
        {
          time: "13:15 - 14:30",
          what: "BREAK",
        },
        {
          time: "14:30 - 16:00",
          what: "Class 3",
        },
        {
          time: "16:15 - 17:45",
          what: "Class 4",
        },
        {
          time: "18:00 - 19:30",
          what: "Class 5",
        },
      ],
    },
    {
      day: "THU",
      date: "17",
      event: [
        {
          time: "9:30",
          what: "Studio open",
        },
        {
          time: "10:30 - 11:30",
          what: "Class 1",
        },
        {
          time: "11:45 - 13:15",
          what: "Class 2",
        },
        {
          time: "13:15 - 14:30",
          what: "BREAK",
        },
        {
          time: "14:30 - 16:00",
          what: "Class 3",
        },
        {
          time: "16:15 - 17:45",
          what: "Class 4",
        },
        {
          time: "18:00 - 19:30",
          what: "Class 5",
        },
      ],
    },
    {
      day: "FRI",
      date: "18",
      event: [
        {
          time: "9:30 - 17:45",
          what: "FREE TIME",
        },
        {
          time: "18:00 - 19:30",
          what: "Q & A WITH TEACHERS",
        },
        {
          time: "20:30 - 22:00",
          what: "DANCE BATTLE 1VS1",
        },
        {
          time: "22:00 - 00:00",
          what: "AFTER PARTY",
        },
      ],
    },
    {
      day: "SAT",
      date: "19",
      event: [
        {
          time: "9:30",
          what: "Studio open",
        },
        {
          time: "10:30 - 11:30",
          what: "Class 1",
        },
        {
          time: "11:45 - 13:15",
          what: "Class 2",
        },
        {
          time: "13:15 - 14:30",
          what: "BREAK",
        },
        {
          time: "14:30 - 16:00",
          what: "Class 3",
        },
        {
          time: "16:15 - 17:45",
          what: "Class 4",
        },
        {
          time: "18:00 - 19:30",
          what: "Class 5",
        },
      ],
    },
    {
      day: "SUN",
      date: "20",
      event: [
        {
          time: "9:30",
          what: "Studio open",
        },
        {
          time: "10:30 - 11:30",
          what: "Class 1",
        },
        {
          time: "11:45 - 13:15",
          what: "Class 2",
        },
        {
          time: "13:15 - 14:30",
          what: "BREAK",
        },
        {
          time: "14:30 - 16:00",
          what: "Class 3",
        },
        {
          time: "16:15 - 17:45",
          what: "Class 4",
        },
        {
          time: "18:00 - 19:30",
          what: "Class 5",
        },
      ],
    },
  ];

  const contentJuniors = [
    {
      day: "WED",
      date: "16",
      event: [
        {
          time: "9:30",
          what: "Studio open",
        },
        {
          time: "10:30 - 11:30",
          what: "Class 1",
        },
        {
          time: "11:45 - 13:15",
          what: "Class 2",
        },
        {
          time: "13:15 - 14:30",
          what: "BREAK",
        },
        {
          time: "14:30 - 16:00",
          what: "Class 3",
        },
      ],
    },
    {
      day: "THU",
      date: "17",
      event: [
        {
          time: "9:30",
          what: "Studio open",
        },
        {
          time: "10:30 - 11:30",
          what: "Class 1",
        },
        {
          time: "11:45 - 13:15",
          what: "Class 2",
        },
        {
          time: "13:15",
          what: "END",
        }
      ],
    },
    {
      day: "FRI",
      date: "18",
      event: [
        {
          time: "9:30 - 17:45",
          what: "FREE TIME",
        },
        {
          time: "18:00 - 19:30",
          what: "Q & A WITH TEACHERS",
        },
        {
          time: "20:30 - 22:00",
          what: "DANCE BATTLE 1VS1",
        },
        {
          time: "22:00 - 00:00",
          what: "AFTER PARTY",
        },
      ],
    },
    {
      day: "SAT",
      date: "19",
      event: [
        {
          time: "9:30",
          what: "Studio open",
        },
        {
          time: "10:30 - 11:30",
          what: "Class 1",
        },
        {
          time: "11:45 - 13:15",
          what: "Class 2",
        },
        {
          time: "13:15 - 14:30",
          what: "BREAK",
        },
        {
          time: "14:30 - 16:00",
          what: "Class 3",
        },
      ],
    },
    {
      day: "SUN",
      date: "20",
      event: [
        {
          time: "9:30",
          what: "Studio open",
        },
        {
          time: "10:30 - 11:30",
          what: "Class 1",
        },
        {
          time: "11:45 - 13:15",
          what: "Class 2",
        },
        {
          time: "13:15",
          what: "END",
        },
      ],
    },
  ];

  const scheduleData =
    selectedCategory === "adults" ? contentAdults : contentJuniors;

  return (
    <div className={styles.mainWrapper} id="schedule">
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.title}>
            {t("mainTitle")} {selectedCategory}
          </div>
          <div className={styles.underTitle}>
            <div className={styles.month}>{t("date")}</div>
            <div className={styles.buttons}>
              <div
                className={`${styles.button} ${selectedCategory === "juniors" ? styles.active : ""}`}
                onClick={() => setSelectedCategory("juniors")}>
                {t("juniors")}
              </div>
              <div
                className={`${styles.button} ${selectedCategory === "adults" ? styles.active : ""}`}
                onClick={() => setSelectedCategory("adults")}>
                {t("adults")}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          {scheduleData.map((events, index) => (
            <div key={index} className={styles.dayWrapper}>
              <div
                className={styles.bottomTop}
                onClick={() => toggleDay(index)}>
                <div className={styles.day}> {events.day} </div>
                <div className={styles.divider} />
                <div className={styles.date}> {events.date} </div>
                <div className={styles.mobileIndicator}>
                  {expandedDays.includes(index) ? "−" : "+"}
                </div>
              </div>

              <div
                className={`${styles.whatWrapper} ${expandedDays.includes(index) ? styles.expanded : ""}`}>
                {events.event.map((what, i) => (
                  <div className={styles.contentWrapper} key={i}>
                    <div className={styles.time}>{what.time}</div>
                    <div className={styles.what}>{what.what}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
