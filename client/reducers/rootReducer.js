import { combineReducers } from 'redux';
import {traderItems, stockItems,newUser,orders,setView,auth} from './items';

var rootReducer= combineReducers({

     traderItems,
     stockItems,
     newUser,
     orders,
     setView,
     auth
});

export default rootReducer;