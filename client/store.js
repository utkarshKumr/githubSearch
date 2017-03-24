import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

import posts from './data/posts';
import comments from './data/comments';

var defaultState = { posts, comments };

var store = createStore(rootReducer, defaultState);

export default store;