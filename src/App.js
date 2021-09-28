import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ERROR_PAGE, HOME_PAGE, SINGLE_PRODUCT } from "./routs.js";

import classes from "./App.module.css";

import HomePage from "./pages/homePage/HomePage.js";
import SingleProduct from "./pages/singleProduct/SingleProduct.js";
import ErrorPage from "./pages/errorPage/ErrorPage.js";
import { getProducts } from "./store/products/userActions.js";
import { changeLanguage } from "./store/language/languageActions.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLanguage
} from "./store/products/productsSelectors.js";

function App() {
  const dispatch = useDispatch();

  const language = useSelector(selectLanguage);
  const isError = useSelector(selectError);

  let localLanguage = localStorage.getItem("choosed_language");

  useEffect(() => {
    dispatch(getProducts(localLanguage ? localLanguage : language));
    dispatch(changeLanguage());
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Router>
        <Switch>
          <Route exact path={HOME_PAGE} component={HomePage} />
          <Route exact path={SINGLE_PRODUCT} component={SingleProduct}>
            {isError ? <Redirect to={ERROR_PAGE} /> : <SingleProduct />}
          </Route>
          <Route path={ERROR_PAGE} component={ErrorPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
