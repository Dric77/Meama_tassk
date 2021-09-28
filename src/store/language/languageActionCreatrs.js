import { SET_LANGUAGE } from "./languageTypes.js";

export const setLanguages = (languages) => {
  return {
    type: SET_LANGUAGE,
    languages
  };
};
