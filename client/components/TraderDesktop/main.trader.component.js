import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import HeaderComponent from '../common-components/headerComponent';
import TableComponent from './table.component';

class TraderMainComponent extends React.Component{

    render(){
        var p;
        if(this.props.view == 1){
            p=<TableComponent {...this.props}/>
        }
        else {
            p=null;
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