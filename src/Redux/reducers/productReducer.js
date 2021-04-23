import { sortAsc, sortDesc } from "../../Utils/utils";

const initialState = {
  products: [],
  sortValue: "",
  currentDisplayProducts: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        currentDisplayProducts: action.payload
      };
    case "FILTER_BY_VALUE":
      const value = action.payload.value;
      if(value === '') {
        return {
          ...state,
          currentDisplayProducts: state.products
        };
      }
      
      const filteredValues = state.products.filter((product) => {
        const hasInTitle = product.title.toLowerCase().includes(value);
        const hasInCategory = product.category.toLowerCase().includes(value);
        return hasInTitle || hasInCategory;
      });
      console.log(filteredValues);
      return {
        ...state,
        currentDisplayProducts: filteredValues,
      };
    case "SORT_BY_TYPE":
      let sortedArr =
        action.payload.value === "price"
          ? sortAsc(state.currentDisplayProducts, "price")
          : sortDesc(state.currentDisplayProducts, "price");
      console.log(sortedArr);
      return {
        ...state,
        currentDisplayProducts: [...sortedArr],
      };
    default:
      return state;
  }
}
export default productReducer;
