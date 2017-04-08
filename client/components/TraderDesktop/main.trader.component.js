import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import HeaderComponent from '../common-components/headerComponent';
import TableComponent from './table.component';
import ChartComponent from './ChartComponent';

class TraderMainComponent extends React.Component{

    render(){
        var p;
        if(this.props.view == 1){
            p=<TableComponent {...this.props}/>
        }
        else if(this.props.view == 0){
            p=<ChartComponent {...this.props}/>;
        }

        return (
            <div>
            <HeaderComponent {...this.props}/>
            {p}
            </div>
        )
    }
};


export default TraderMainComponent;