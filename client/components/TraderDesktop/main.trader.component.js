import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import HeaderComponent from '../common-components/headerComponent';
import TableComponent from './table.component';
import ChartComponent from './ChartComponent';
import Websocket from 'react-websocket';

class TraderMainComponent extends React.Component{
     handleData(data){
   data=data.substring(2,data.length);
   data=JSON.parse(data);
  //  console.log(data[0],data[1]);
    this.props.updateOrderSocket(data[0],data[1]);
  //this.props.getOrders("http://localhost:8080/orders");
 }
    render(){
        var p;
        if(this.props.view == 1){
            p=<TableComponent {...this.props}/>
        }
        else if(this.props.view == 0){
            p=<ChartComponent {...this.props}/>;
        }
        if(this.props.loginAuth)
        return (
            <div>
            <HeaderComponent {...this.props}/>
            {p}

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