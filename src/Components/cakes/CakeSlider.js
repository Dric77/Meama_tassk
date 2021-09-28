import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SINGLE_PRODUCT } from "../../routs.js";
import { selectCake } from "../../store/products/productsSelectors.js";

import CakeCard from "./cakeCard/CakeCard.js";

import classes from "./CakeSlider.module.css";

function CakeSlider() {
  const cake = useSelector(selectCake);

  return (
    <div className={classes.sliderContainer}>
      <h1 className={classes.title}> {cake && cake.name && cake.name} </h1>
      <div className={classes.cardContainer}>
        <ul className={classes.cards}>
          {cake &&
            cake.products &&
            cake.products.map((el) => {
              return (
                <Link to={SINGLE_PRODUCT.replace("slug", el.slug)}>
                  <li key={el.id}>
                    <CakeCard data={el} />
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default CakeSlider;
