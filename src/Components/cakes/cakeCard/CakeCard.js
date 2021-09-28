import React from "react";

import classes from "./CakeCard.module.css";

function CakeCard({ data }) {
  console.log("cake price", data);
  return (
    <div
      className={classes.cardContainer}
      style={{ backgroundColor: data.bgColor }}
    >
      <img alt="product img" className={classes.cardImg} src={data.mainPhoto} />
      <div className={classes.description}>
        <h3> {data.name}</h3>
        <h1> {data.price}₾ </h1>
      </div>
    </div>
  );
}

export default CakeCard;
