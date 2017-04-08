import React from 'react';
import ReactDOM from 'react-dom';
class HeaderComponent extends React.Component{


    render(){
        let user;
        if(this.props.user)
        user=this.props.user;
        return (
            <div className="header container-fluid">
            <p className="title">Trader Desktop</p>
            <span className="pull-right"> 
            <p className="username"><i>{user}</i></p>
            <a>Sign Out</a>
            </span>
            </div>
        )
    }
};


export default HeaderComponent;