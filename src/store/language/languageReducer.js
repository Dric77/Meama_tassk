import { SET_LANGUAGE } from "./languageTypes.js";

const initialState = {
  lan: []
};

export const language = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        lan: action.languages
      };

    default:
      return state;
  }
};
