/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

export const ContactForm = () => {
  const t = useTranslations("contact");
  const [success, setSuccess] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const validateEmail = (email: string) => {
    const regex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    return regex.test(email);
  };

  const handleSubmit = async () => {
    if (!formData.name || !validateEmail(formData.email) || !formData.description) {
      console.error("Form is not valid");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Raw Response:", response);

      const text = await response.text();
      console.log("Response Body:", text);

      // Try parsing only if response is not empty
      const result = text ? JSON.parse(text) : {};

      if (response.ok) {
        setSuccess(1);
        setFormData({ name: "", email: "", description: "" });
      } else {
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };



  return (
    <div className={`${styles.formWrapper}`} id="contact">
      <div className={styles.wrapper}>
        <div className={styles.title}>{t("mainTitle")}</div>
        <div className={styles.formMainWrapper}>
          <form
            className={`${styles.form}`}
            onSubmit={(e) => e.preventDefault()}
            id="contact-form">
            <div className={styles.mainTitle}>
              <div className={styles.text}>{t("text")}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="Name" hidden>
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name="name"
                  placeholder={t('name')}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" hidden>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="description" hidden>
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder={t('description')}
                  maxLength={1000}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }></textarea>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.buttonWrapper}>
                {success === 1 ? (
                  <div className={styles.successAnimation}>
                    <svg
                      viewBox="0 0 26 26"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.checkmark}>
                      <g
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path
                          className={styles.circle}
                          d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"
                        />
                        <path
                          className={styles.tick}
                          d="M6.5 13.5L10 17l8.808621-8.308621"
                        />
                      </g>
                    </svg>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className={styles.button}
                    onClick={handleSubmit}
                    disabled={
                      !(
                        formData.name &&
                        validateEmail(formData.email) &&
                        formData.description
                      )
                    }>
                    {t("button")}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
