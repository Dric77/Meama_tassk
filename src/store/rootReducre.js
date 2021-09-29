import { combineReducers } from "redux";
import { products } from "./products/productReducer.js";
import { language } from "./language/languageReducer.js";

const rootReducer = combineReducers({
  language,
  products
});

export default rootReducer;
