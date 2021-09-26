import React from "react";

import classes from "./Container.module.css";

export default function Contaier({ children }) {
  return <div className={classes.container}>{children}</div>;
}
