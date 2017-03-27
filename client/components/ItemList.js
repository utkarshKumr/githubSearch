import React from 'react';
import { connect } from 'react-redux';
import { getTraders, getStocks } from '../actions/items';
import Main from './Main.component';

  const mapStateToProps = (state) => {
        return {
            traders: state.traderItems,
            stocks: state.stockItems
        };
    }

const mapDispatchToProps = (dispatch) => {
        return {
            getStocks: (url) => dispatch(getStocks(url)),
            getTraders: (url) => dispatch(getTraders(url))
        };
    }
    var App=connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
