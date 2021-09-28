import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../routs.js";

import classes from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.padinDiv}>
        <div className={classes.message}>
          <h1>ოპააა...</h1>
          <p>გვერდი ვერ მოიძებნა</p>
        </div>
        <Link to={HOME_PAGE}>
          <button className={classes.btn}>მთავარ გვერდზე დაბრუნება</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
