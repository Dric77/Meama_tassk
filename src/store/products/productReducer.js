import {
  SET_CAKE,
  SET_COCKTAIL,
  SET_COFFE,
  SET_ERRORS,
  SET_LANGUAGE,
  SET_MEAMA_PRODUCTS,
  SET_TEA
} from "./reduxTypes.js";

const initialState = {
  coffe: [],
  tea: [],
  cocktail: [],
  cake: [],
  meamaProducts: [],
  language: "ka",
  errors: ""
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_COFFE:
      return {
        ...state,
        coffe: action.coffe
      };
    case SET_TEA:
      return {
        ...state,
        tea: action.tea
      };
    case SET_COCKTAIL:
      return {
        ...state,
        cocktail: action.cocktail
      };
    case SET_CAKE:
      return {
        ...state,
        cake: action.cake
      };
    case SET_MEAMA_PRODUCTS:
      return {
        ...state,
        meamaProducts: action.meamaProducts
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.errors
      };

    default:
      return state;
  }
};
