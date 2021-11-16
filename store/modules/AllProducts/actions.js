import { 
VIEW_PRODUCTS_START,
VIEW_PRODUCTS_SUCCESS,
VIEW_PRODUCTS_ERROR
} from './actionTypes';
import API from '../../../utils/API';


const apiStart = () =>({
    type: VIEW_PRODUCTS_START
});

const apiSuccess = (payload) =>({
    type: VIEW_PRODUCTS_SUCCESS,
    payload
});

const apiError = (error) =>({
    type: VIEW_PRODUCTS_ERROR,
    error
});

export const viewProducts = () => async(dispatch) =>{

    dispatch(apiStart());
    try {
        const config = {
            headers: {
                  'Content-Type': 'application/json'
              },
            };
        const response = await API.get(`api/v1/products`, config);
        dispatch(apiSuccess(response.data));
    } catch (error) {
        console.log(error.response);
        dispatch(apiError(error.response));
    }
}