import { combineReducers } from 'redux';
import getAllProducts from './modules/AllProducts/reducer';

const rootReducer = combineReducers({
    getAllProducts
});

export default rootReducer;
