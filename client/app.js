import React from 'react';
import { render } from 'react-dom';
import css from './css/common.styl';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/ItemList';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import {baseUrl} from './components/common-components/common';
import Main from './components/Main.component';
import LoginComponent from './components/login/login';
import TraderMainComponent from './components/TraderDesktop/main.trader.component';
import TableComponent from './components/TraderDesktop/table.component';
import 'react-notifications/lib/notifications.css';
const store = configureStore();
//here sending empty initialstates
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LoginComponent}/>
                <Route path="/view/:id" component={TraderMainComponent}>
                </Route>        
            </Route>
    </Router>
    </Provider>,
    document.getElementById('root')
);
