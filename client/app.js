import React from 'react';
import { render } from 'react-dom';
import css from './css/common.styl';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/ItemList';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Main from './components/Main.component';
import SearchComponent from './components/search/search';
import SearchResults from './components/results/searchResults';
import RepoDetails from './components/results/repoDetails';
const store = configureStore();

render(
    <Provider store={ store }>
      <Router history={hashHistory}>
        <Route path={`/`} component={ App }>
          <IndexRoute component={ SearchComponent } />
          <Route path={`/search`} component={ SearchResults }></Route>
          <Route path="details/:user/:repo" component={RepoDetails}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);
