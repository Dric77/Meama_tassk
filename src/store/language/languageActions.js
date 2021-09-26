import API from "../../api.js";
import { setChoosedLanguage } from "./languageActionCreatrs.js";

export const changeLanguage = () => (dispatch) => {
  API.switchLanguage().then((lan) => dispatch(setChoosedLanguage(lan)));
};
