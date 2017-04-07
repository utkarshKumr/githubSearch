import React from 'react';
import ReactDOM from 'react-dom';
class HeaderComponent extends React.Component{

    render(){
        
        return (
            <div className="header"> 
            <h1>{this.props.user}</h1>
            </div>
        )
    }
};


export default HeaderComponent;