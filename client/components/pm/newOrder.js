import React from 'react';
import ReactDOM from 'react-dom';

export default class NewOrderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
        //  stocks:this.props.stocks,
        //     traders:this.props.traders,
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
                this.props.getStocks("http://10.203.60.100:3000/search/"+event.target.value);
                this.setState({searchStock:event.target.value});
        // var txt=event.target.value;
        // console.log(txt);
        // this.setState({searchStock:txt});

    }

    // componentWillMount(){
    //     var stocks=[];
    //     var traders=[];
    //     $.get()
    //     stocks=[
    //         {stockName:'TCS',stockPrice:100},
    //         {stockName:'Ambuja Cement', stockPrice:200},
    //         {stockName:'Samsung',stockPrice:500},
    //         {stockName:'Tata',stockPrice:900}
    //     ];
    //     traders=[
    //         {traderName:'Utkarsh'},
    //         {traderName:'Anshul'},
    //         {traderName:'Parth'},
    //         {traderName:'Rishabh'},
    //         {traderName:'Rishi'}
    //     ];
    //     this.setState({stocks:stocks});
    //     this.setState({traders:traders});   
    // }


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
                break;
        }
    }
    formSubmit(item){
        var formDetail={};
        formDetail.et_id=ReactDOM.findDOMNode(this.refs.traderSelect).value;
        formDetail.side=this.state.sideOption;
        formDetail.symbol=this.state.symbolOption; 
            
        console.log(item);
        if(item){
            ReactDOM.findDOMNode(this.refs.searchElement).value=item.stock_name;
            formDetail.stock_name=item.stock_name;
            
            ReactDOM.findDOMNode(this.refs.currentPrice).value=item.price;
            formDetail.current_price=item.price;
            
            var limit_price=ReactDOM.findDOMNode(this.refs.limitPrice).value
            formDetail.limit_price=limit_price;
            
            var stop_price=ReactDOM.findDOMNode(this.refs.stopPrice).value
            formDetail.stop_price=stop_price;
            
            

            formDetail.quantity=ReactDOM.findDOMNode(this.refs.quantityReq).value;
            console.log(formDetail.quantity);
        }

        formDetail={};
    }
    render(){
        var table=this.props.stocks.map((item,index)=>{
            if(this.state.searchStock)
            //if(item.stockName.slice(0,this.state.searchStock.length).toUpperCase().search(this.state.searchStock.toUpperCase()) >=0)
            return(
                <tr onClick={this.formSubmit.bind(this,item)}>
                  <td >{item.stock_name}</td>
                  <td >{item.price}</td>
                </tr> 
            
            );
        });

        var traderOptions=this.props.traders.map((item,index)=>{
        return <option key={Math.random()*10} value={item.name}>{item.name}</option>;
        })

        return(
            <form className="container-fluid">
               <section className="col-xs-6"> 
                <div>
                    <input type="text" className="form-control" ref="searchElement" placeholder="search stocks" onChange={this.search.bind(this)}/>
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
                <select name="Trader" ref="traderSelect" className="form-control">
                    {traderOptions}
                </select>
                </div>
                </section>
                <section className="col-xs-6">                
                <div className="row">
                    <div className="input-field col-xs-12">
                        <label htmlFor="">Quantity:</label>                                                                        
                        <input type="number" className="form-control" ref="quantityReq" id="quantity" name="qty" required/>
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
                        <label htmlFor="cprice">CURRENT</label>
                        <input type="checkbox" id="lprice" value="limit" onChange={this.orderTypeHandler.bind(this)} name="lprice" 
                        checked={this.state.limit} />
                        <label htmlFor="lprice">LIMIT</label>
                        <input type="checkbox" id="sprice" value="stop" onChange={this.orderTypeHandler.bind(this)} name="sprice" 
                        checked={this.state.stop} />
                        <label htmlFor="sprice">STOP LOSS</label>
                        <input type="checkbox" id="bprice" value="both" onChange={this.orderTypeHandler.bind(this)} name="bprice"
                         checked={this.state.both} />
                        <label htmlFor="bprice">LIMIT AND STOP LOSS</label>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="number" className="form-control" id="current_price" ref="currentPrice" placeholder="Current Price"   
                            name="currentPrice" disabled={this.state.limit||this.state.stop||this.state.both}/>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="number" className="form-control" ref="limitPrice" placeholder="Limit Price" 
                        id="limit_price"  name="limitPrice" disabled={this.state.current||this.state.stop}/>
        
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="number" id="stop_loss" ref="stopPrice" disabled={this.state.current||this.state.limit} className="form-control" placeholder="Stop Loss"  name="stopPrice"/>
                    </div>
                </div>

                <button type="button" className="btn btn-success" onClick={this.formSubmit.bind(this)} >Submit</button>             

                </section>
            </form>
        )
    }
} 