import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import HeaderComponent from '../common-components/headerComponent';
import TableComponent from './table.component';
import ChartComponent from './ChartComponent';
import Websocket from 'react-websocket';
import cookie from 'react-cookie';

class TraderMainComponent extends React.Component{
     handleData(data){
   data=data.substring(2,data.length);
   data=JSON.parse(data);
    this.props.updateOrderSocket(data[0],data[1]);
 }
 
    render(){
        var view;
        if(this.props.view == 1){
            view=<TableComponent {...this.props}/>
        }
        else if(this.props.view == 0){
            view=<ChartComponent {...this.props}/>;
        }


        if(this.props.params.id === cookie.load('id'))
        return (
            <div className="Trader">
            <HeaderComponent {...this.props}/>
            {view}
            <Websocket url='ws://localhost:8080/socket.io/?transport=websocket' 
                 onMessage={this.handleData.bind(this)}/>
            </div>
        )
       else
       return(
           <div>
           <h1>Session Expired!</h1>
           </div>
       ) 
    }
};


export default TraderMainComponent;