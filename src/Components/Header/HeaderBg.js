import React from "react";

import classes from "./Header.module.css";

function HeaderBg({ children }) {
  return <div className={classes.bg}> {children} </div>;
}

export default HeaderBg;
