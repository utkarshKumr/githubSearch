import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import HeaderComponent from '../common-components/headerComponent';
import TableComponent from './table.component';
class TraderMainComponent extends React.Component{

    render(){
        
        return (
            <div>
            <HeaderComponent {...this.props}/>
            {/*React.cloneElement(this.props.children,this.props)*/}
            <TableComponent {...this.props}/>
            </div>
        )
    }
};


export default TraderMainComponent;