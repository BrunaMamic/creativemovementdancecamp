"use client";

import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import codes from "country-calling-code";
import { ChevronDown } from "lucide-react";

interface PhoneNumberInputProps {
  onChange?: (value: { phone: string; countryCode: string }) => void;
  value: string;
  error?: string;
  label: string;
  placeholder: string;
  name: string;
}

interface Country {
  country: string;
  countryCodes: string[];
  isoCode2: string;
}

export default function PhoneNumberInput({
  onChange,
  value,
  error,
  placeholder,
}: PhoneNumberInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    country: "Croatia",
    countryCodes: ["385"],
    isoCode2: "HR",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countriesList: Country[] = Array.isArray(codes)
    ? codes
    : Object.values(codes);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);

    if (onChange) {
      onChange({
        phone: phoneNumber,
        countryCode: country.countryCodes[0],
      });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setPhoneNumber(newPhone);

    if (onChange) {
      onChange({
        phone: newPhone,
        countryCode: selectedCountry.countryCodes[0],
      });
    }
  };

  return (
    <div className={styles.wrapAll}>
      <div
        className={`${styles.inputMainWrapper} ${error ? styles.error : ""}`}>
        <div ref={dropdownRef} className={styles.countrySelect}>
          <div
            className={styles.selectedCountry}
            onClick={() => setIsOpen(!isOpen)}>
            <span className={`textmd-sec-regular ${styles.countryCode}`}>
              {selectedCountry.isoCode2} <ChevronDown color="white" size={18} />
            </span>
            <span className={`${styles.code} textmd-sec-regular`}>
              +{selectedCountry.countryCodes}
            </span>
          </div>

          {isOpen && (
            <div className={`textsm-sec-medium ${styles.countryList}`}>
              {countriesList.map((country, index) => (
                <div
                  key={index}
                  className={styles.countryItem}
                  onClick={() => handleCountrySelect(country)}>
                  <span>{country.country}</span>
                  <span style={{ color: "var(--gray500)" }}>
                    +{country.countryCodes?.[0]}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          className={`textmd-sec-regular ${styles.phoneInput}`}
        />
      </div>

      {error && (
        <div
          className={` textsm-sec-regular ${error ? styles.errorText : ""}`}
          style={
            error ? { color: "var(--error)" } : { color: "var(--gray600)" }
          }>
          {error}
        </div>
      )}
    </div>
  );
}
