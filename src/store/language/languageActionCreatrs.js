import { SET_LANGUAGE } from "./languageTypes.js";

export const setChoosedLanguage = (languages) => {
  return {
    type: SET_LANGUAGE,
    languages
  };
};
