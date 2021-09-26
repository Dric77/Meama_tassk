import React from "react";
import { useSelector } from "react-redux";
import { selectTea } from "../../store/products/productsSelectors.js";
import MainCard from "./mainCard/MainCard.js";

import classes from "./MainSlider.module.css";

function MainSlider() {
  const tea = useSelector(selectTea);

  return (
    <div className={classes.sliderContainer}>
      <h1 className={classes.title}> {tea.name} </h1>
      <div className={classes.cardContainer}>
        <ul className={classes.cards}>
          {tea &&
            tea.subCategories &&
            tea.subCategories[0].products.map((el) => {
              return (
                <li key={el.id}>
                  <MainCard data={el} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default MainSlider;
