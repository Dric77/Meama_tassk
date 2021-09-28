import { SET_LANGUAGE } from "./languageTypes.js";

const initialState = {
  languages: []
};

export const language = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        languages: action.languages
      };

    default:
      return state;
  }
};
