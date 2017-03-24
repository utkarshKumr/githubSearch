import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/MainScript'
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import {baseUrl} from './components/common-components/common';
const store = configureStore();
//here sending empty initialstates
render(
    <Provider store={store}>
        <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
    </Provider>,
    document.getElementById('root')
);
