"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Organizer = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>THE ORGANIZER</div>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/static/monika.webp"}
              alt="monika veselcic"
              width={350}
              height={400}
            />
            <div className={styles.name}>Monika Veselcic</div>
          </div>
          <div className={styles.about}>
            <span>
              is the passionate dance teacher and organizer behind the Creative
              Movement Summer Dance Camp, which is now expanding to a new
              location in Split, Croatia for the first time. With years of
              experience organizing successful dance camps, Monika has built a
              reputation for bringing the dance community together.
            </span>
            <span>
              She is deeply dedicated to education and growth, ensuring that
              dancers of all levels have access to high-quality camps and
              workshops in the heart of Europe, set in a beautiful seaside
              location.
            </span>

            {!expanded && (
              <div
                onClick={() => setExpanded(true)}
                className={styles.seeMoreBtn}>
                Read More
              </div>
            )}

            {expanded && (
              <>
                <span>
                  Her passion for bringing people together is at the heart of
                  everything she does. Monika is driven by a desire to give
                  every dancer the possibility to thrive, regardless of their
                  background or experience level. She has spent years traveling
                  the world, building knowledge and connections that have
                  enriched her understanding of dance in all its forms. Through
                  these connections, Monika has become a trusted figure in the
                  international dance community, a bridge for dancers to access
                  some of the best resources and opportunities available. Her
                  dedication to the art form, combined with her caring approach,
                  makes her events a unique and enriching experience for all who
                  attend.
                </span>
                <span>
                  Monika’s work is a testament to her belief in the power of
                  respect, community, and collaboration. She sees organizing
                  these events as her purpose, a way to share her passion and
                  contribute to the growth of the global dance family. For
                  Monika, every event is a chance to show the world how dance
                  can unite, inspire, and create lasting change.
                </span>

                <button
                  onClick={() => setExpanded(false)}
                  className={styles.seeMoreBtn}>
                  Show Less
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
