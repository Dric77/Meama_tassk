import React from "react";
import lanLogo from "../../../Logo/lanLogo.png";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../../routs.js";

import classes from "./SingleProductHeader.module.css";
import { TiArrowLeft } from "react-icons/ti";

function SingleProductHeader() {
  return (
    <header className={classes.header}>
      <Link to={HOME_PAGE}>
        <div className={classes.backIcon}>
          <TiArrowLeft size="2rem" />
        </div>
      </Link>
      <div>
        <img alt="switche" src={lanLogo} />
        <span> </span>
      </div>
    </header>
  );
}

export default SingleProductHeader;
