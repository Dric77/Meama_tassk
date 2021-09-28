import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCoffe } from "../../store/products/productsSelectors.js";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

import Card from "./card/Card.js";

import classes from "./HeaderSlider.module.css";
import { SINGLE_PRODUCT } from "../../routs.js";

function HeaderSlider() {
  const coffe = useSelector(selectCoffe);

  return (
    <div className={classes.sliderContainer}>
      <h1 className={classes.title}> {coffe && coffe.name && coffe.name} </h1>
      <div className={classes.cardContainer}>
        <Swiper className={classes.cards}>
          {coffe &&
            coffe.products &&
            coffe.products.map((el) => {
              return (
                <SwiperSlide className={classes.swiper}>
                  <Link
                    className={classes.remmoveLinkStyles}
                    key={el.id}
                    to={SINGLE_PRODUCT.replace("slug", el.slug)}
                  >
                    <li className={classes.li}>
                      <Card data={el} />
                    </li>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default HeaderSlider;
