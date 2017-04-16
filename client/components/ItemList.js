import React from 'react';
import { connect } from 'react-redux';
import { getTraders, 
    getStocks,
    selectUser,
    getOrders,
    changeView,
    deleteOrders,
    updateOrderSocket,
    notify,
    notifyMessage } from '../actions/items';
import Main from './Main.component';

  const mapStateToProps = (state) => {
        return {
            traders: state.traderItems,
            stocks: state.stockItems,
            user:state.newUser,
            orders:state.orders,
            view:state.setView,
            ordersLeft : state.deleteItems,
            notification:state.notification,
            nMessage:state.nMessage
        };
    }

const mapDispatchToProps = (dispatch) => {
        return {
            getStocks: (url) => dispatch(getStocks(url)),
            getTraders: (url,data) => dispatch(getTraders(url,data)),
            userName: (user)=>dispatch(selectUser(user)),
            getOrders: (url)=>dispatch(getOrders(url)),
            changeView: (view)=>dispatch(changeView(view)),
            deleteOrders: (url) => dispatch(deleteOrders(url)),
            updateOrderSocket:(msg,data)=>dispatch(updateOrderSocket(msg,data)),
            notify:()=>dispatch(notify()),
            notifyMessage:(msg)=>dispatch(notifyMessage(msg))
        };
    }
    var App=connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
