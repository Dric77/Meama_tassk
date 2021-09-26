import React from "react";

import logo from "../../Logo/Logo.png";
import lanLogo from "../../Logo/lanLogo.png";
import arrow from "../../Logo/arrow.png";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectLanguages } from "../../store/language/languageSelectors.js";

export default function Header({ modalHandler }) {
  const languages = useSelector(selectLanguages);

  return (
    <div className={classes.container}>
      <div>
        <img className={classes.logo} src={logo} />
      </div>
      <div className={classes.lanSwitcher} onClick={modalHandler}>
        <img src={lanLogo} />
        {languages && languages[0] && <h3> {languages[0].name} </h3>}
        <img src={arrow} />
      </div>
    </div>
  );
}
