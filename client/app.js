// Code Here
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import AlbumComponent from "./components/Album.component";
import PhotoComponent from "./components/Photo.component";
import Main from "./components/Main.component";
import { Provider } from "react-redux";
import store from "./store";
import App from './components/MainScript'
import css from './styles/style.styl';
var router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AlbumComponent} />
        <Route path="/view/:id" component={PhotoComponent} />
      </Route>
    </Router>
  </Provider>
);
ReactDOM.render(router, document.getElementById("root"));
