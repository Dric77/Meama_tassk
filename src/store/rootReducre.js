import { combineReducers } from "redux";
import { products } from "./products/productReducer.js";
import { language } from "./language/languageReducer.js";

const rootReducer = combineReducers({
  products,
  language
});

export default rootReducer;
