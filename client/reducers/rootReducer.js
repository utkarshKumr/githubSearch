import { combineReducers } from 'redux';
import {traderItems, stockItems,newUser,orders,setView,deleteItems} from './items';

var rootReducer= combineReducers({

     traderItems,
     stockItems,
     newUser,
     orders,
     setView,
     deleteItems
});

export default rootReducer;