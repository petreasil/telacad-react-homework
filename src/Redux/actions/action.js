import axios from 'axios';

export const getProducts = () => async dispatch => {
    const res = await axios.get('https://fakestoreapi.com/products');
    dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data
    });
};

export function filterByValue(payload) {
    console.log(payload);
    return { type: "FILTER_BY_VALUE", payload }
};

export function sortByType(payload) {
    console.log(payload);
    return { type: "SORT_BY_TYPE", payload }
}