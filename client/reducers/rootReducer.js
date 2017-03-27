import { combineReducers } from 'redux';
import {traderItems, stockItems} from './items';

var rootReducer= combineReducers({
    // items,
    // itemsHasErrored,
    // itemsIsLoading,
     traderItems,
     stockItems
});

export default rootReducer;