import React from "react";

import classes from "./Card.module.css";

function Card({ data }) {
  return (
    <>
      <div className={classes.imgContainer}>
        <img
          alt="product img"
          className={classes.cardImg}
          src={data.mainPhoto}
        />
      </div>
      <div className={classes.description}>
        <h3> {data.name} </h3>
        <h1> {data.price}₾ </h1>
      </div>
    </>
  );
}

export default Card;
