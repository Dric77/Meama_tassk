import API from "../../api.js";
import {
  setCake,
  setCocktail,
  setCoffe,
  setErrors,
  setLanguage,
  setMeamaProducts,
  setTea
} from "./productActionCreators.js";

export const getProducts = (language) => (distaptch) => {
  API.getAllData(language)
    .then((data) => {
      distaptch(setCoffe(data[0]));
      distaptch(setTea(data[1]));
      distaptch(setCocktail(data[2]));
      distaptch(setCake(data[3]));
      distaptch(setMeamaProducts(data[4]));
      distaptch(setLanguage(language));
    })
    .catch((e) => {
      setErrors(true);
    });
};
