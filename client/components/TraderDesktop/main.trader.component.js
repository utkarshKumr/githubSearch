import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import HeaderComponent from '../common-components/headerComponent';
import TableComponent from './table.component';
import ChartComponent from './ChartComponent';
import Websocket from 'react-websocket';
import cookie from 'react-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class TraderMainComponent extends React.Component {
    handleData(data) {
        var date=new Date();
        data = data.substring(2, data.length);
        data = JSON.parse(data);
        this.props.updateOrderSocket(data[0], data[1]);
        // if(data[0] === 'orderCreatedEvent' || data[0]==='allOrdersDeletedEvent')
        // this.props.setMap(data[0]+"_map",data[1]);
        

        if(data[0] === 'orderCreatedEvent' || data[0]==='allOrdersDeletedEvent'){
            console.log("deleted");
            if(data[0]==='allOrdersDeletedEvent')
            {
            if (this.props.notification)
                NotificationManager.error('All trades Deleted!', 'Deleted', 3000);
            this.props.notifyMessage({mess:'All trades Deleted',date:date.toLocaleString(),color:"bg-danger"});
        }
        this.props.setMap(data[0]+"_map",data[1]);
        }

        else if (data[1].status === 'Executed' || data[0]==='executionCreatedEvent') {
            var mess1,mess2;
                    mess1 = `ID: ${data[1].orderId},
                Trader:${this.props.getMap.get(data[1].orderId).traderId},
                Stock: ${this.props.getMap.get(data[1].orderId).symbol}`;

                    mess2= `${data[1].quantityExecuted} stocks of ${this.props.getMap.get(data[1].orderId).symbol} 
                    (ID:${data[1].orderId}) by ${this.props.getMap.get(data[1].orderId).traderId}
                    are Executed!`            


            if (this.props.notification && data[1].status === 'Executed')
                NotificationManager.success(mess1, 'Executed!', 1200);
            this.props.notifyMessage({mess:mess2,date:date.toLocaleString(),color:"bg-success"});
        }
        else if (data[1].status === 'Placed' || data[0]==='placementCreatedEvent') {
            var mess1,mess2;
                   mess1 = `ID: ${data[1].orderId},
                Trader:${this.props.getMap.get(data[1].orderId).traderId},
                Stock: ${this.props.getMap.get(data[1].orderId).symbol}`;
                    mess2= `${data[1].quantityPlaced} stocks of ${this.props.getMap.get(data[1].orderId).symbol} 
                    (ID:${data[1].orderId}) by ${this.props.getMap.get(data[1].orderId).traderId}
                    are Placed!`                
            this.props.notifyMessage({mess:mess2,date:date.toLocaleString(),color:"bg-info"});
        }
    }



    render() {
        var view;
        if (this.props.view == 1) {
            view = <TableComponent {...this.props} />
        }
        else if (this.props.view == 0) {
            view = <ChartComponent {...this.props} />;
        }



        if (this.props.params.id === cookie.load('id'))
            return (
                <div className="Trader">
                    <HeaderComponent {...this.props} />
                    {view}
                    <Websocket url='ws://localhost:8080/socket.io/?transport=websocket'
                        onMessage={this.handleData.bind(this)} />
                    <NotificationContainer />
                </div>

            )
        else
            return (
                <div>
                    <h1>Session Expired!</h1>
                </div>
            )
    }
};


export default TraderMainComponent;