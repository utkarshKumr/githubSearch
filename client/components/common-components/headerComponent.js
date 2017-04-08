import React from 'react';
import ReactDOM from 'react-dom';
import NavigationComponent from '../common-components/navbar.component';
class HeaderComponent extends React.Component{


    render(){
        let user;
        if(this.props.user)
        user=this.props.user;
        return (
            <div className="header container-fluid">
             <div id="headerLine">
                     <p className="title">Trader Desktop</p>
                    <span className="pull-right"> 
                         <p className="username"><i>{user}</i></p>
                        <a>Sign Out</a>
                    </span>
            </div>
                    <NavigationComponent {...this.props}/>
            
            </div>
        )
    }
};


export default HeaderComponent;