import React from 'react';
import ReactDOM from 'react-dom';

var BarStackHorizontalChart = require('react-d3-basic').BarStackHorizontalChart;

class ChartComponent extends React.Component{

    componentDidMount(){
        console.log("inside did mount");
        this.props.getOrders("http://localhost:8080/orders");
    }


    
  

    render(){

        var data=[];
        var count=0;
        console.log(this.props.orders);
        var chartData=this.props.orders.map((item,index)=>{
            console.log(item.id);
            var id=item.id;
            var qplaced=item.quantityPlaced-item.quantityExecuted;
            var Executed=(item.quantityExecuted/item.quantity);
            var Placed=(qplaced/item.quantity);
            var Total=1-Executed-Placed;
            data.push({id,Executed,Placed,Total});
            console.log(Executed+" "+Placed+" "+Total);
            count++;
        });

        var chartSeries  = [
            {
            field: 'Executed',
            name: 'Executed', 
            color:'#FF8000'
           },
            {
            field: 'Placed',
            name: 'Placed', 
            color:'#FEBB68'
            },
            {
            field: 'Total',
            name: 'Total Orders', 
            color:'#FFEFBF'
            }
        ];
        var y = function(d) {
            return d.id;
        },
        x = function(d) {
            return +d;
        },
        width=1000,
        height=count*25,
        legendClassName = "test-legend",
        legendPosition = 'right',
        yScale = "ordinal",
        yLabel = 'Order Id',
        showYGrid = false,
        xOrient = 'top',
        xTickOrient = 'top',
        xTickFormat = d3.format("%");
        console.log(data);   
        
        // var orderData=this.props.orders[0];
        //   console.log(orderData);   
            return (
            
                <div className="container">
                    <h1>Chart</h1>
                    <BarStackHorizontalChart
                        title='Order Execution Status'
                        data={data}
                        chartSeries={chartSeries}
                        width={width}
                        height={height}
                        showYGrid={showYGrid}
                        xOrient={xOrient}
                        yScale={yScale}
                        yLabel={yLabel}
                        y={y}
                        x={x}
                        xTickFormat={xTickFormat}
                        legendClassName = {legendClassName}
                        legendPosition= {legendPosition}
                    />
                </div>
        )
    }
};


export default ChartComponent;