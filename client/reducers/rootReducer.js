import { combineReducers } from 'redux';
import posts from './postReducer';
import comments from './commentReducer';

var rootReducer = combineReducers({
    posts,
    comments
})
export default rootReducer;