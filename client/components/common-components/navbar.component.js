import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

class NavigationComponent extends React.Component{
    constructor(props){
        super(props);
         this.state = {
      showModal: false,
      id : 0
    }
     this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    }
      componentDidMount(){
        console.log("inside did mount")
        this.props.getStocks("http://localhost:8080/instruments");
     }
    changeView(value){
        console.log(value);
        this.props.changeView(value);
    }
    handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

 deleteOrder(){
    this.props.deleteOrders("http://localhost:8080/orders")
    this.setState({ showModal: false });
    
 }
  createOrder () {
    let orderSize = ReactDOM.findDOMNode(this.refs.orderNumber).value;
    for(let i=0;i<orderSize;i++)
    {
    let data = {
      side:"",
      symbol:"",
      quantity:0,
      limitPrice:0,
      traderId:1
    }
    let x = Math.ceil(Math.random() * 30)
    // let counter = 1;
    console.log();
    data.symbol = this.props.stocks[x-1].symbol
    // this.props.stocks.map((item,key)=>{
    //      if(counter===x)
    //      {
    //        data.symbol = item.symbol;
    //     }
    //     counter++;
    // })
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
    this.setState({ showModal: false });
  }
    render(){
        return (
            <div>
                <button className="orderCreation" onClick={this.handleOpenModal}><b>Trade</b></button>
                <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}>
        <div>
          <p>Enter number of trades</p>
           <input className='form-input' type="text" placeholder="value" ref="orderNumber" />
           </div>
          <button onClick={this.handleCloseModal} className="pull-right btn btn-danger">Cancel</button>
          <button onClick={this.createOrder.bind(this)} className="pull-right btn btn-success">Create</button>  
          <button onClick={this.deleteOrder.bind(this)} className="pull-right btn btn-success">Delete All</button>          
                  
        </ReactModal>
                <button className="orderCreation"  onClick={this.deleteOrder.bind(this)}><b>Delete All</b></button>
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