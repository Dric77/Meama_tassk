import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Components/Header/Header.js";
import classes from "./App.module.css";
import HeaderBg from "./Components/Header/HeaderBg.js";
import Contaier from "./Components/container/Contaier.js";
import HeaderSlider from "./Components/HeaderSlider/HeaderSlider.js";
import MainSlider from "./Components/mainSlider/MainSlider.js";
import Footer from "./Components/footer/Footer.js";
import { getProducts } from "./store/products/userActions.js";
import Modal from "./Components/modal/Modal.js";
import { selectLanguage } from "./store/products/productsSelectors.js";
import { changeLanguage } from "./store/language/languageActions.js";
import CocktailSlider from "./Components/coktailSlider/CocktailSlider.js";

function App() {
  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const language = useSelector(selectLanguage);

  useEffect(() => {
    dispatch(getProducts(language));
    dispatch(changeLanguage());
  }, []);

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
        <HeaderSlider datat={productData} />
      </HeaderBg>
      <MainSlider />
      <CocktailSlider />
      <Contaier>
        <Footer />
      </Contaier>
    </div>
  );
}

export default App;
