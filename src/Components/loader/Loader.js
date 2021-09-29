import React from "react";
import { useSelector } from "react-redux";

import classes from "./Loader.module.css";

import { selectLoading } from "../../store/products/productsSelectors.js";

function Loader({ children }) {
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return (
      <div class={classes.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return children;
}

export default Loader;
