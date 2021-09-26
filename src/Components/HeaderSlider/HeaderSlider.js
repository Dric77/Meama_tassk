import React from "react";
import { useSelector } from "react-redux";
import { selectCoffe } from "../../store/products/productsSelectors.js";

import Card from "./card/Card.js";

import classes from "./HeaderSlider.module.css";

function HeaderSlider({ data }) {
  const coffe = useSelector(selectCoffe);

  return (
    <div className={classes.sliderContainer}>
      <h1 className={classes.title}> {coffe && coffe.name && coffe.name} </h1>
      <div className={classes.cardContainer}>
        <ul className={classes.cards}>
          {coffe &&
            coffe.products &&
            coffe.products.map((el) => {
              return (
                <li key={el.id}>
                  <Card data={el} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default HeaderSlider;
