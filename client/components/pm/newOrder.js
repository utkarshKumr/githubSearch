import React from 'react';
import ReactDOM from 'react-dom';

export default class NewOrderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchStock:"",
            sideOption:"buy",
            symbolOption:"NSE",
            current:true,
            limit:false,
            stop:false,
            both:false
        }
    }

    search(event){
        var txt=event.target.value;
        console.log(txt);
        this.setState({searchStock:txt});

    }

    componentWillMount(){
        var stocks=[];
        var traders=[];

        stocks=[
            {stockName:'TCS',stockPrice:100},
            {stockName:'Ambuja Cement', stockPrice:200},
            {stockName:'Samsung',stockPrice:500},
            {stockName:'Tata',stockPrice:900}
        ];
        traders=[
            {traderName:'Utkarsh'},
            {traderName:'Anshul'},
            {traderName:'Parth'},
            {traderName:'Rishabh'},
            {traderName:'Rishi'}
        ];
        this.setState({stocks:stocks});
        this.setState({traders:traders});   
    }


    sideOptionHandler(event){
        this.setState({sideOption:event.target.value})
    }
    symbolOptionHandler(event){
        this.setState({symbolOption:event.target.value})
    }

    orderTypeHandler(event){
        switch(event.target.value){
            case 'current':
                this.setState({current:true,limit:false,stop:false,both:false});
                break;
            case 'limit':
                this.setState({current:false,limit:true,stop:false,both:false});
                console.log("limit");
                break;
            case 'stop':
                this.setState({current:false,limit:false,stop:true,both:false});
                break;
            case 'both':            
                this.setState({current:false,limit:false,stop:false,both:true});
                break;s
        }
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

        var traderOptions=this.state.traders.map((item)=>{
            return <option value={item.traderName}>{item.traderName}</option>;
        })

        return(
            <form class="container-fluid">
               <section className="col-xs-6"> 
                <div>
                    <input type="text" className="form-control" placeholder="search stocks" onChange={this.search.bind(this)}/>
                </div>
                <br/>
                <div>
                    {this.state.searchStock?
                    <table className="table table-bordered hoverable"> 
                        <tr>
                            <th>Stock Name</th>
                            <th>Stock Price</th>
                        </tr>
                        {table}
                    </table>:null}
                </div>
                <div>
                <label htmlFor="">Select Trader:</label>
                <select name="Trader" className="form-control">
                    {traderOptions}
                </select>
                </div>
                </section>
                <section className="col-xs-6">
                <div className="row">
                    <div className="input-field col-xs-12">
                        <label htmlFor="">Quantity:</label>                                                                        
                        <input type="number" className="form-control" id="quantity" name="qty" required/>
                    </div>
                </div>
                <br/>
                <div className="row col-xs-6">
                    <label>SIDE:</label>
                    <div className="radio">
                        <label><input type="radio" checked={this.state.sideOption==='buy'} value="buy" onChange={this.sideOptionHandler.bind(this)}/>Buy</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" checked={this.state.sideOption==='sell'} onChange={this.sideOptionHandler.bind(this)} value="sell"/>Sell</label>
                    </div>
                </div>
                <div className="row col-xs-6">
                    <label>SYMBOL:</label>
                    <div className="radio">
                        <label><input type="radio" checked={this.state.symbolOption==='NSE'} value="NSE" onChange={this.symbolOptionHandler.bind(this)}/>NSE</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" checked={this.state.symbolOption==='BSE'} value="BSE" onChange={this.symbolOptionHandler.bind(this)}/>BSE</label>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-xs-12">
                        <label>ORDER TYPE:</label><br/>
                        <input type="checkbox" id="cprice" value="current" onChange={this.orderTypeHandler.bind(this)} name="cprice" 
                        checked={this.state.current} />
                        <label for="cprice">CURRENT</label>

                        <input type="checkbox" id="lprice" value="limit" onChange={this.orderTypeHandler.bind(this)} name="lprice" 
                        checked={this.state.limit} />
                        <label for="lprice">LIMIT</label>
                        <input type="checkbox" id="sprice" value="stop" onChange={this.orderTypeHandler.bind(this)} name="sprice" 
                        checked={this.state.stop} />
                        <label for="sprice">STOP LOSS</label>
                        <input type="checkbox" id="bprice" value="both" onChange={this.orderTypeHandler.bind(this)} name="bprice"
                         checked={this.state.both} />
                        <label for="bprice">LIMIT AND STOP LOSS</label>

                    </div>
                </div>                

                </section>
            </form>
        )
    }
} 