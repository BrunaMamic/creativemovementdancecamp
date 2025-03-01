"use client";

import styles from "./styles.module.scss";
import { useState } from "react";

export const CampIdea = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>CAMP IDEA</div>
        <div className={styles.text}>
          <span>
            Monika Veselcic’s <b>Creative Movement Summer Dance Camp</b> offers
            a comprehensive training experience that covers a wide array of
            dance styles, providing something for every dancer. From
            contemporary and hip-hop to ballet, freestyle and hip-hop basics,
            modern, heels and more, the camp offers diverse styles that cater to
            dancers of all levels and backgrounds.
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
                Monika’s vision is to provide a space where dancers can grow not
                only in their chosen styles but also as artists, ready to
                explore the many facets of the dance world. By carefully
                selecting national and international dance teachers from various
                countries and backgrounds, Monika ensures that the camp offers a
                rich and varied dance education, exposing dancers to different
                teaching styles, techniques, and cultural perspectives.
              </span>
              <span>
                The camp’s environment is designed to be positive and
                motivating, with an emphasis on fun, creativity and community.
                It’s not just about perfecting technique—it’s about having a
                great time, meeting new people, and creating memories that will
                last long after the camp ends.
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
  );
};
