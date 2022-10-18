import React from "react";
import ContactIcons from "./contacticons/ContactIcons";
import { useSelector } from "react-redux";
import { selectedCurrentMode } from "features/them/themSlice";
import "./footer.scss";
function Footer() {
  const darkMode = useSelector(selectedCurrentMode);
  const theme = darkMode ? "dark" : "light" ;

  return (
    <footer className={`mainfooter ${theme}`}>
      <span>@Tahrer abu diab</span>

      <ContactIcons />
    </footer>
  );
}

export default Footer;
