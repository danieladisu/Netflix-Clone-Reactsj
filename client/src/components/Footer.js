/** @format */

import React, { useEffect, useState } from "react";
import "./Footer.css";
import { GrLanguage } from "react-icons/gr";

const listItems1 = {
  english: [
    "FAQ",
    "Account",
    "Jobs",
    "Buy Gift Cards",
    "Privacy",
    "Contact Us",
    "Legal Notices",
  ],
  german: [
    "FAQ",
    "Konto",
    "Karriere",
    "Geschenkkarten kaufen",
    "Datenschutz",
    "Kontakt",
    "Rechtliche Hinweise",
  ],
};

const listItems2 = {
  english: [
    "Cancel Membership",
    "Media Center",
    "Netflix Shop",
    "Ways to Watch",
    "Cookie Preferences",
    "Speed Test",
    "Only on Netflix",
  ],
  german: [
    "Mitgliedschaft kündigen",
    "Medienzentrum",
    "Netflix-Shop",
    "Wiedergabemöglichkeiten",
    "Cookie-Einstellungen",
    "Geschwindigkeitstest",
    "Nur bei Netflix",
  ],
};

const listItems3 = {
  english: [
    "Help Center",
    "Investor Relations",
    "Redeem Gift Cards",
    "Terms of Use",
    "Impressum",
    "Legal Guarantee",
  ],
  german: [
    "Hilfe-Center",
    "Investor-Relations",
    "Geschenkkarten einlösen",
    "Nutzungsbedingungen",
    "Impressum",
    "Rechtliche Garantie",
  ],
};

function Footer() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "english"
  );

  const handleClick = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const items1 = listItems1[language].map((item, index) => (
    <li key={index}>{item}</li>
  ));
  const items2 = listItems2[language].map((item, index) => (
    <li key={index}>{item}</li>
  ));
  const items3 = listItems3[language].map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <footer className="footerContainer">
      <div className="inerContainer">
        <div className="Call">
          Questions? Call
          <a className="telefon" href="tel: 0800-000-0000">
            {" "}
            0800-000-0000
          </a>
        </div>
        <div className="listWrapper">
          <ul>{items1}</ul>
          <ul>{items2}</ul>
          <ul>{items3}</ul>
        </div>
        <div className="language">
          <select className="selector" value={language} onChange={handleClick}>
            <option value="english">
              <span className="icon">
                <GrLanguage />
              </span>
              English
            </option>
            <option value="german">
              <span className="icon">
                <GrLanguage className="icon" />
              </span>
              German
            </option>
          </select>
        </div>
        <p>Netflix Germany</p>
      </div>
    </footer>
  );
}

export default Footer;
