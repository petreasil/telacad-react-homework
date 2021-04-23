import axios from 'axios';
import { plainToClass } from 'class-transformer';
import { ProductModel } from '../../models/product.model';

export const getProducts = () => async dispatch => {
    const res = await axios.get('https://fakestoreapi.com/products');
    const payload = plainToClass(ProductModel, res.data);
    dispatch({
        type: 'GET_PRODUCTS',
        payload
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