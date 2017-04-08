import { combineReducers } from 'redux';
import {traderItems, stockItems,newUser,orders,setView} from './items';

var rootReducer= combineReducers({

     traderItems,
     stockItems,
     newUser,
     orders,
     setView
});

export default rootReducer;