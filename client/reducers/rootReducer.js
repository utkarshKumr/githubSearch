import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';

var rootReducer= combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});

export default rootReducer;