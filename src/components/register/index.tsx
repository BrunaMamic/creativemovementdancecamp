/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import PhoneNumberInput from "./phoneInput";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/routing";
import {useTranslations} from "next-intl";

export const Register = () => {
  const t = useTranslations("contact");
  const [success, setSuccess] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    phone: "",
    birthday: "",
    category: "",
    package: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [packageDropdownOpen, setPackageDropdownOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const creativeJuniors = [
    "MOVE FULL OUT - 150€",
    "DANCE, SLEEP, REPEAT - 350€",
    "EARLY BIRD PASS - 100€",
  ];

  const creativeAdults = [
    "MOVE FULL OUT - 290€",
    "DANCE, SLEEP, REPEAT - 490€",
    "EARLY BIRD PASS - 240€",
    "BATTLE MOVERS -190€",
    "MOVE ONE DAY - 90€",
  ];

  const getPackageOptions = () => {
    if (formData.category === "Creative Junior") return creativeJuniors;
    if (formData.category === "Creative Adults") return creativeAdults;
    return [...creativeJuniors, ...creativeAdults];
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSelect = (category: string) => {
    setFormData({ ...formData, category });
    setSelectedPackage("");
    setDropdownOpen(false);
  };

  const handlePhoneInputChange = ({
    phone,
    countryCode,
  }: {
    phone: string;
    countryCode: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      phone: `${countryCode} ${phone}`,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  // const handleSubmit = async () => {
  //   let isValid = true;
  //   const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //
  //   if (
  //     !formData.name ||
  //     !regex.test(formData.email) ||
  //     !formData.phone ||
  //     !formData.birthday ||
  //     !formData.category ||
  //     !formData.package
  //   ) {
  //     isValid = false;
  //   }
  //
  //   if (isValid) {
  //     const form = new FormData();
  //
  //     form.append("name", formData.name);
  //     form.append("email", formData.email);
  //     form.append("phone", formData.phone);
  //     form.append("birthday", formData.birthday);
  //     form.append("category", formData.category);
  //     form.append("package", formData.package);
  //     form.append("description", formData.description);
  //
  //     const dataToSend = {
  //       name: formData.name,
  //       email: formData.email,
  //       phone: formData.phone,
  //       birthday: formData.birthday,
  //       category: formData.category,
  //       package: formData.package,
  //       description: formData.description,
  //     };
  //     setSuccess(1);
  //
  //     console.log(dataToSend);
  //   } else {
  //     console.error("Form is not valid");
  //   }
  // };


  const handleSubmit = async () => {
    if (
        !formData.name ||
        !validateEmail(formData.email) ||
        !formData.phone ||
        !formData.birthday ||
        !formData.category ||
        !formData.package
    ) {
      console.error("Form is not valid");
      return;
    }

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      birthday: formData.birthday,
      category: formData.category,
      package: formData.package,
      description: formData.description || "", // Avoid undefined
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const text = await response.text();
      console.log("Raw Response:", text);

      const result = text ? JSON.parse(text) : {};

      if (response.ok) {
        setSuccess(1);
        console.log("Registration successful:", result);
      } else {
        console.error("Registration failed:", result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className={styles.formWrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.wrapper}>
        <div className={styles.formMainWrapper}>
          <form
            className={styles.form}
            onSubmit={(e) => e.preventDefault()}
            id="contact-form">
            <div className={styles.mainTitle}>
              <div className={styles.text}>
                {t('textRegister')}

              </div>
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
                <PhoneNumberInput
                  label="Phone Number"
                  placeholder={""}
                  onChange={handlePhoneInputChange}
                  error={""}
                  value={formData.phone}
                  name={"phone"}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="birthday" hidden>
                  Date of birth
                </label>
                <input
                  type="text"
                  id="birthday"
                  name="birthday"
                  placeholder={t('date')}
                  value={formData.birthday}
                  onChange={(e) =>
                    setFormData({ ...formData, birthday: e.target.value })
                  }
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="Category" hidden>
                  Category
                </label>
                <input
                  type="text"
                  id="Category"
                  name="Category"
                  placeholder={t('category')}
                  value={formData.category}
                  onClick={toggleDropdown}
                  readOnly
                  className={styles.catInput}
                />
                <div className={styles.dropdownArrow}>
                  <ChevronDown color="white" size={18} />
                </div>
                {dropdownOpen && (
                  <div className={styles.countryList}>
                    <div
                      className={styles.countryItem}
                      onClick={() => handleSelect("Creative Junior")}>
                      Creative Junior
                    </div>
                    <div
                      className={styles.countryItem}
                      onClick={() => handleSelect("Creative Adults")}>
                      Creative Adults
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="package" hidden>
                  Package
                </label>
                <input
                  type="text"
                  id="package"
                  name="package"
                  placeholder={t('package')}
                  value={selectedPackage}
                  onClick={() => setPackageDropdownOpen((prev) => !prev)}
                  readOnly
                  className={styles.catInput}
                />
                <div className={styles.dropdownArrow}>
                  <ChevronDown color="white" size={18} />
                </div>
                {packageDropdownOpen && (
                  <div className={styles.countryList}>
                    {getPackageOptions().map((pkg, index) => (
                      <div
                        key={index}
                        className={styles.countryItem}
                        onClick={() => {
                          setSelectedPackage(pkg);
                          setFormData({ ...formData, package: pkg });
                          setPackageDropdownOpen(false);
                        }}>
                        {pkg}
                      </div>
                    ))}
                  </div>
                )}
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
                  placeholder={t('registerDescription')}
                  maxLength={1000}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }></textarea>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.buttonWrapper}>
                <div className={styles.termsCheckbox}>
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  <label htmlFor="terms">
                    {t('terms1')}
                    <Link
                      href="/terms-and-conditions"
                      className={styles.termsLink} style={{margin: '0 5px'}}>
                      {t('termsLink')}
                    </Link>{" "}
                    {t('terms2')}
                  </label>
                </div>
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
                        formData.phone &&
                        formData.birthday &&
                        formData.category &&
                        formData.package &&
                        termsAccepted
                      )
                    }>
                    {t('button')}
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
