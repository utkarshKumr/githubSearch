import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class NavigationComponent extends React.Component{
    constructor(props){
        super(props);
         this.state = {
       isOpen: false,
      id : 0
    }
     
    }
      componentDidMount(){
        console.log("inside did mount")
        this.props.getStocks("http://localhost:8080/instruments");
     }
    changeView(value){
        console.log(value);
        this.props.changeView(value);
    }
   openModal() {
  this.setState({
    isOpen: true
  });
};
 
hideModal(){
  this.setState({
    isOpen: false
  });
};

 deleteOrder(){
    this.props.deleteOrders("http://localhost:8080/orders")
    
 }


 refreshOrders(){
   this.props.getOrders("http://localhost:8080/orders");
 }
  createOrder () {
    let orderSize = ReactDOM.findDOMNode(this.refs.orderNumber).value;
    if(this.props.notification)
    {
    if(orderSize>1)
    NotificationManager.info(`${orderSize} orders created!`);
    else if(orderSize==1)
    NotificationManager.info(`${orderSize} order created!`);
    }
    for(let i=0;i<orderSize;i++)
    {
    let data = {
      side:"",
      symbol:"",
      quantity:0,
      limitPrice:0,
      traderId:this.props.params.id
    }
    let x = Math.ceil(Math.random() * 30);

    data.symbol = this.props.stocks[x-1].symbol;
    if(Math.ceil(Math.random() * 2)===1)
    {
      data.side = "buy"
    }
    else{
      data.side = "sell"
    }
    data.quantity = Math.ceil(Math.random() * 200);
    data.limitPrice = Math.ceil(Math.random() * 100);
    this.props.getTraders("http://localhost:8080/orders",data)
    }
    this.setState({ isOpen: false });
  }

    render(){

const style = {
  margin:5,
      width:90,
    height:25,
};
     
        return (
          
            <div>
                {/*<button className="orderCreation" onClick={this.openModal.bind(this)}><b>Trade</b></button>*/}
                <RaisedButton label="Trade" primary={true} style={style} onClick={this.openModal.bind(this)}/>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal.bind(this)}>
  <ModalHeader>
    <ModalClose onClick={this.hideModal.bind(this)}/>
    <ModalTitle>Create Multiple Trades</ModalTitle>
  </ModalHeader>
  <ModalBody>
    <p>Enter number of trades</p>
    <input className='form-input form-control' type="text" ref="orderNumber" /> 
  </ModalBody>
  <ModalFooter>
   <button onClick={this.createOrder.bind(this)} className='btn btn-primary'>
      Create
    </button>
    <button className='btn btn-default' onClick={this.hideModal.bind(this)}>
      Cancel
    </button>
  </ModalFooter>
</Modal> 
                <RaisedButton label="Delete" onClick={this.deleteOrder.bind(this)} secondary={true} style={style}/>
                <RaisedButton label="Refresh" style={style} onClick={this.refreshOrders.bind(this)} />
               {/* <button className="orderCreation" onClick={this.deleteOrder.bind(this)}><b>Delete All</b></button>
                <button className="orderCreation" onClick={this.refreshOrders.bind(this)}><b>Refresh</b></button>*/}
                <span className="pull-right">
                    <button className={(this.props.view)?"iconsSelected":"icons"} onClick={this.changeView.bind(this,1)}><i className={(this.props.view)?"fa fa-table imgSelectedColor":"fa fa-table"}></i></button>
                    <button className={(this.props.view)?"icons":"iconsSelected"} onClick={this.changeView.bind(this,0)}><i className={(this.props.view)?"fa fa-bar-chart":"fa fa-bar-chart imgSelectedColor"}></i></button>
                </span>

                <NotificationContainer/>
            </div>
            
        )
    }
};


export default NavigationComponent;