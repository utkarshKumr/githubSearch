import React from 'react';
import ReactDOM from 'react-dom';
class NavigationComponent extends React.Component{
    constructor(props){
        super(props);
    }
    changeView(value){
        console.log(value);
        this.props.changeView(value);
    }
    render(){
        return (
            <div>
                <button className="orderCreation"><b>Trade</b></button>
                <button className="orderCreation"><b>Delete All</b></button>
                <button className="orderCreation"><b>Refresh</b></button>
                <span className="pull-right">
                    <button className="icons active" onClick={this.changeView.bind(this,1)}><i className="fa fa-table"></i></button>
                    <button className="icons" onClick={this.changeView.bind(this,0)}><i className="fa fa-bar-chart"></i></button>
                </span>

            </div>
        )
    }
};


export default NavigationComponent;