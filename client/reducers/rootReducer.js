import { combineReducers } from 'redux';
import {searchInput,searchedData,loading, activeElement, count} from './items';

var rootReducer= combineReducers({
    searchInput,
    searchedData,
    loading,
    activeElement,
    count
});

export default rootReducer;