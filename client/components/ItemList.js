import React from 'react';
import { connect } from 'react-redux';
import { getTraders, getStocks,selectUser } from '../actions/items';
import Main from './Main.component';

  const mapStateToProps = (state) => {
        return {
            traders: state.traderItems,
            stocks: state.stockItems,
            user:state.newUser
        };
    }

const mapDispatchToProps = (dispatch) => {
        return {
            getStocks: (url) => dispatch(getStocks(url)),
            getTraders: (url,data) => dispatch(getTraders(url,data)),
            userName: (user)=>dispatch(selectUser(user))
        };
    }
    var App=connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
