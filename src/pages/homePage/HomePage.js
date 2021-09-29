import { useState } from "react";

import Header from "../../Components/Header/Header.js";
import classes from "../../App.module.css";
import HeaderBg from "../../Components/Header/HeaderBg.js";
import Contaier from "../../Components/container/Contaier.js";
import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider.js";
import MainSlider from "../../Components/mainSlider/MainSlider.js";
import Footer from "../../Components/footer/Footer.js";
import Modal from "../../Components/modal/Modal.js";
import CocktailSlider from "../../Components/coktailSlider/CocktailSlider.js";
import CakeSlider from "../../Components/cakes/CakeSlider.js";

function HomePage() {
  const [openModal, setOpenModal] = useState(false);

  let modalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className={classes.mainContainer}>
      <Modal openModal={openModal} modalHandler={modalHandler} />
      <HeaderBg>
        <Contaier>
          <Header modalHandler={modalHandler} />
        </Contaier>
        <HeaderSlider />
      </HeaderBg>
      <MainSlider />
      <CocktailSlider />
      <CakeSlider />
      <Contaier>
        <Footer />
      </Contaier>
    </div>
  );
}

export default HomePage;
