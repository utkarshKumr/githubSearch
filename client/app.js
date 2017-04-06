import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/ItemList';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import {baseUrl} from './components/common-components/common';
import Main from './components/Main.component';
import LoginComponent from './components/login/login';
const store = configureStore();
//here sending empty initialstates
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LoginComponent}/>
                {/*<Route path="/pm/addnew" component="NewOrderComponent"/>
                <Route path="/pm/draft" component="DraftComponent"/>*/}
            </Route>
    </Router>
    </Provider>,
    document.getElementById('root')
);
