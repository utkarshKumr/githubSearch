import { combineReducers } from 'redux';
import {traderItems, stockItems,newUser,orders,setView,auth,id,notification,nMessage} from './items';

var rootReducer= combineReducers({

     traderItems,
     stockItems,
     newUser,
     orders,
     setView,
     notification,
     nMessage
});

export default rootReducer;