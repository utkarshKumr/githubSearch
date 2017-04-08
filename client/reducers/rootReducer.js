import { combineReducers } from 'redux';
import {traderItems, stockItems,newUser,orders} from './items';

var rootReducer= combineReducers({

     traderItems,
     stockItems,
     newUser,
     orders
});

export default rootReducer;