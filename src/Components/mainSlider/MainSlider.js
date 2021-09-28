import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTea } from "../../store/products/productsSelectors.js";

import { SINGLE_PRODUCT } from "../../routs.js";

import classes from "./MainSlider.module.css";

import MainCard from "./mainCard/MainCard.js";

function MainSlider() {
  const tea = useSelector(selectTea);

  return (
    <div className={classes.sliderContainer}>
      <h1 className={classes.title}> {tea && tea.name && tea.name} </h1>
      <div className={classes.cardContainer}>
        <ul className={classes.cards}>
          {tea &&
            tea.subCategories &&
            tea.subCategories[0].products.map((el) => {
              return (
                <Link to={SINGLE_PRODUCT.replace("slug", el.slug)}>
                  <li key={el.id}>
                    <MainCard data={el} />
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default MainSlider;
