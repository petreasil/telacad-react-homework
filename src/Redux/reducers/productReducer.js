import { sortAsc, sortDesc } from "../../Utils/utils"

const initialState = {
    products: [],
    sortValue: '',
    sortedProducts: []

};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case "FILTER_BY_VALUE":

            let value = action.payload.value;
            let filteredValues = state.products.filter(product => {

                return product.title.toLowerCase().includes(value) ||
                    product.category.toLowerCase().includes(value);
            });
            return {
                ...state,
                products: filteredValues
            }
        case "SORT_BY_TYPE":

            let sortedArr = action.payload.value === "price" ?
                sortAsc(state.products, 'price') :
                sortDesc(state.products, 'price');
            console.log(sortedArr);
            return {
                ...state,
                products: [...sortedArr]
            };
        default:
            return state;
    }
}
export default productReducer;