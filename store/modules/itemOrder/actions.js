import { Alert } from 'react-native';
import {
ITEM_ORDER_START,
ITEM_ORDER_SUCCESS,
ITEM_ORDER_ERROR
    } from './actionTypes';
import API from '../../../utils/API';

const apiStart = () =>({
    type: ITEM_ORDER_START
});

const apiSuccess = (payload) =>({
    type: ITEM_ORDER_SUCCESS,
    payload
});

const apiError = (error) =>({
    type: ITEM_ORDER_ERROR,
    error
});

export const placeOrder = (values) => async(dispatch) =>{

    dispatch(apiStart());
    try {
        const config = {
            headers: {
                  'Content-Type': 'application/json'
              },
            };
        const response = await API.post(`api/v1/orders`, values);
        dispatch(apiSuccess(response.data));
        Alert.alert('Success', response.data.message, [
            {text: 'OK'}
        ]);
    } catch (error) {
        console.log(error.response);
        dispatch(apiError(error.response));
    }
}