import { combineReducers } from 'redux';
import {traderItems, stockItems,newUser,orders,setView,auth,id,notification} from './items';

var rootReducer= combineReducers({

     traderItems,
     stockItems,
     newUser,
     orders,
     setView,
     notification
});

export default rootReducer;