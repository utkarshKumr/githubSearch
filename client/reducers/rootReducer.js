import { combineReducers } from 'redux';
import {traderItems, stockItems,newUser} from './items';

var rootReducer= combineReducers({

     traderItems,
     stockItems,
     newUser
});

export default rootReducer;