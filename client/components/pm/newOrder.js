import React from 'react';
import ReactDOM from 'react-dom';

export default class NewOrderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchStock:""
        }
    }

    search(event){
        var txt=event.target.value;
        console.log(txt);
        this.setState({searchStock:txt});

    }

    componentWillMount(){
        var stocks=[];
        stocks=[
            {stockName:'TCS',stockPrice:100},
            {stockName:'Ambuja Cement', stockPrice:200},
            {stockName:'Samsung',stockPrice:500},
            {stockName:'Tata',stockPrice:900}
        ];
        this.setState({stocks:stocks});   
    }

    render(){
        var table=this.state.stocks.map((item,index)=>{
            if(this.state.searchStock)
            if(item.stockName.slice(0,this.state.searchStock.length).toUpperCase().search(this.state.searchStock.toUpperCase()) >=0)
            return(
                <tr>
                  <td>{item.stockName}</td>
                  <td>{item.stockPrice}</td>
                </tr>      
            );
        });


        return(
            <form class="container-fluid">
                <div class="col-xs-6">
                    <input type="text" placeholder="search" onChange={this.search.bind(this)}/>
                </div>
                <div>
                    {this.state.searchStock?
                    <table>
                        <tr>
                            <th>Stock Name</th>
                            <th>Stock Price</th>
                        </tr>
                        {table}
                    </table>:null}
                </div>
            </form>
        )
    }
} 