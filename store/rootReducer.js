import { combineReducers } from 'redux';
import getAllProducts from './modules/AllProducts/reducer';
import makeNewOrder from './modules/itemOrder/reducer';

const rootReducer = combineReducers({
    getAllProducts,
    makeNewOrder
});

export default rootReducer;
