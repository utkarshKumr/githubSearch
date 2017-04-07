import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import HeaderComponent from '../common-components/headerComponent';
class TraderMainComponent extends React.Component{

    render(){
        
        return (
            <HeaderComponent {...this.props}/>
        )
    }
};


export default TraderMainComponent;