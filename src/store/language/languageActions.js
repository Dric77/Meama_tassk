import API from "../../api.js";
import { setLanguages } from "./languageActionCreatrs.js";

export const changeLanguage = () => (dispatch) => {
  API.switchLanguage().then((lan) => dispatch(setLanguages(lan)));
};
