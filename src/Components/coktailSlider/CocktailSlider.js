import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCocktail } from "../../store/products/productsSelectors.js";
import CocktailCard from "./cocktailCard/CocktailCard.js";

import classes from "./CocktailSlider.module.css";

function CocktailSlider() {
  const cocktail = useSelector(selectCocktail);

  const [filterCoktails, setFilterCoktails] = useState(0);

  let handleCoktail = (e) => {
    setFilterCoktails(e.target.value);
  };

  return (
    <div className={classes.sliderContainer}>
      <h1 className={classes.title}>
        {cocktail && cocktail.name && cocktail.name}
      </h1>
      <ul className={classes.coktailFilter}>
        {cocktail &&
          cocktail.subCategories &&
          cocktail.subCategories.map((el) => {
            return (
              <li
                value={el.sortIndex}
                className={filterCoktails === el.sortIndex && classes.active}
                onClick={handleCoktail}
                key={el.id}
              >
                {el.name}
              </li>
            );
          })}
      </ul>
      <div className={classes.cardContainer}>
        <ul className={classes.cards}>
          {cocktail &&
            cocktail.subCategories &&
            cocktail.subCategories[filterCoktails].products.map((el) => {
              return (
                <li key={el.id}>
                  <CocktailCard data={el} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default CocktailSlider;
