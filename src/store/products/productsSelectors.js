export const selectAllProducts = (state) => state.products;
export const selectCoffe = (state) => state.products.coffe;
export const selectTea = (state) => state.products.tea;
export const selectCake = (state) => state.products.cake;
export const selectCocktail = (state) => state.products.cocktail;

export const selectLanguage = (state) => state.products.language;

export const selectError = (state) => state.products.isError;
