import React from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';

class TableComponent extends React.Component{
    componentDidMount(){
        this.props.getOrders("http://localhost:8080/orders");
    }
    priceFormatter(cell, row) {
        return `<i class='glyphicon glyphicon-usd'></i> ${cell}`;
    }

createCustomModalHeader(onClose, onSave) {
    const headerStyle = {
      fontWeight: 'bold',
      fontSize: 'large',
      textAlign: 'center',
      backgroundColor: '#eeeeee'
    };
    return (
      <div className='modal-header' style={ headerStyle }>
        <h3>That is my custom header</h3>
        <button className='btn btn-info' onClick={ onClose }>Close it!</button>
      </div>
    );
  
}

    render(){

        const options = {
            insertModalHeader: this.createCustomModalHeader
            };

        return (
           <div >
            <div className="col-xs-12 hidden-xs hidden-sm">
              <BootstrapTable data={this.props.orders} options={options}  striped hover>
                <TableHeaderColumn dataField='id' isKey dataAlign="center">ID</TableHeaderColumn>
                <TableHeaderColumn dataField='creationTime' dataAlign="center">Creation Time</TableHeaderColumn>
                <TableHeaderColumn dataField='side' dataAlign="center">Side</TableHeaderColumn>
                <TableHeaderColumn dataField='symbol' dataAlign="center">Symbol</TableHeaderColumn>
                <TableHeaderColumn dataField='quantity' dataAlign="center">Quantity</TableHeaderColumn>
                <TableHeaderColumn dataField='quantityPlaced' dataAlign="center">Placed</TableHeaderColumn>
                <TableHeaderColumn dataField='quantityExecuted' dataAlign="center">Executed</TableHeaderColumn>
                <TableHeaderColumn dataField='limitPrice' dataAlign="center" dataFormat={ this.priceFormatter }>Limit Price</TableHeaderColumn>
                <TableHeaderColumn dataField='priority' dataAlign="center">Priority</TableHeaderColumn>
                <TableHeaderColumn dataField='status' dataAlign="center">Status</TableHeaderColumn>
                <TableHeaderColumn  dataField='traderId' dataAlign="center">Trader</TableHeaderColumn>                                                
            </BootstrapTable>
            </div>

               <div className="col-xs-12 visible-xs">
              <BootstrapTable data={this.props.orders} options={options}  striped hover>
                <TableHeaderColumn width='50' dataField='id' isKey dataAlign="center">ID</TableHeaderColumn>
              
                <TableHeaderColumn width='60' dataField='side' dataAlign="center">Side</TableHeaderColumn>
                <TableHeaderColumn width='80' dataField='symbol' dataAlign="center">Symbol</TableHeaderColumn>
                <TableHeaderColumn width='90' dataField='quantity' dataAlign="center">Quantity</TableHeaderColumn>
            
                <TableHeaderColumn width='90' dataField='limitPrice' dataAlign="center" dataFormat={ this.priceFormatter }>Limit Price</TableHeaderColumn>
                                                            
            </BootstrapTable>
            </div>

                <div className="col-xs-12 visible-sm">
              <BootstrapTable data={this.props.orders} options={options}  striped hover>
                <TableHeaderColumn dataField='id' isKey dataAlign="center">ID</TableHeaderColumn>
                <TableHeaderColumn dataField='creationTime' dataAlign="center">Creation Time</TableHeaderColumn>
                <TableHeaderColumn dataField='side' dataAlign="center">Side</TableHeaderColumn>
                <TableHeaderColumn dataField='symbol' dataAlign="center">Symbol</TableHeaderColumn>
                <TableHeaderColumn dataField='quantity' dataAlign="center">Quantity</TableHeaderColumn>
                <TableHeaderColumn dataField='quantityPlaced' dataAlign="center">Placed</TableHeaderColumn>
                <TableHeaderColumn dataField='quantityExecuted' dataAlign="center">Executed</TableHeaderColumn>
                <TableHeaderColumn dataField='limitPrice' dataAlign="center" dataFormat={ this.priceFormatter }>Limit Price</TableHeaderColumn>
        
                <TableHeaderColumn dataField='status' dataAlign="center">Status</TableHeaderColumn>
                                                   
            </BootstrapTable>
            </div>
            </div>
        )
    }
};


export default TableComponent;