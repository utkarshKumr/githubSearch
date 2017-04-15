import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import HeaderComponent from '../common-components/headerComponent';
import TableComponent from './table.component';
import ChartComponent from './ChartComponent';
import Websocket from 'react-websocket';
import cookie from 'react-cookie';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 

class TraderMainComponent extends React.Component{
     handleData(data){
   data=data.substring(2,data.length);
   data=JSON.parse(data);
    this.props.updateOrderSocket(data[0],data[1]);

if(this.props.notification)
{
 if(data[0]==='allOrdersDeletedEvent')
 {
    console.log("deleted");
      NotificationManager.error('All trades Deleted!','Deleted',3000);
 }

  else if(data[1].status === 'Executed')
    {
        var mess;
        for(let i=0;i<this.props.orders.length;i++)
            if(data[1].orderId === this.props.orders[i].id)
            {
                mess=`ID: ${data[1].orderId},
                Trader: ${this.props.orders[i].traderId},
                Stock: ${this.props.orders[i].symbol}`;
                break;
            }
    NotificationManager.success(mess,'Executed!',10000);
}
   else if(data[1].status === 'Placed')
    {
        var mess;
        for(let i=0;i<this.props.orders.length;i++)
            if(data[1].orderId === this.props.orders[i].id)
            {
                mess=`ID: ${data[1].orderId},
                Trader: ${this.props.orders[i].traderId},
                Stock: ${this.props.orders[i].symbol}`;
                break;
            }
    NotificationManager.info(mess,'Placed!',5000);
    }
}

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
                  <NotificationContainer/>
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