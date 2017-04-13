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

//   renderShowsTotal(start, to, total) {
//     return (
//       <p style={ { color: 'blue' } }>
//         From { start } to { to }, totals is { total }&nbsp;&nbsp;(its a customize text)
//       </p>
//     );
//   }

    render(){

                const options = {
            insertModalHeader: this.createCustomModalHeader,                    
    //   page: 2,  // which page you want to show as default
    //   sizePerPageList: [ {
    //     text: '5', value: 5
    //   }, {
    //     text: '10', value: 10
    //   }, {
    //     text: 'All', value: this.props.orders.length
    //   } ], // you can change the dropdown list for size per page
    //   sizePerPage: 5,  // which size per page you want to locate as default
    //   pageStartIndex: 0, // where to start counting the pages
    //   paginationSize: 3,  // the pagination bar size.
    //   prePage: 'Prev', // Previous page button text
    //   nextPage: 'Next', // Next page button text
    //   firstPage: 'First', // First page button text
    //   lastPage: 'Last', // Last page button text
    //   paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
    //   paginationPosition: 'top'  // default is bottom, top and both is all available
    //   // hideSizePerPage: true > You can hide the dropdown for sizePerPage
    //   // alwaysShowAllBtns: true // Always show next and previous button
    //   // withFirstAndLast: false > Hide the going to First and Last page button
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