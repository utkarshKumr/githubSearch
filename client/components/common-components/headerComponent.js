import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import cookie from 'react-cookie';
import NavigationComponent from '../common-components/navbar.component';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:this.props.user
        }
    }
    auth(){
        cookie.remove('id',{ path: '/' });
        localStorage.removeItem('user');
    }
    render(){
           if(this.props.user.length>0)
             localStorage.setItem('user', this.props.user);
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div className="header container-fluid">
             <div id="headerLine">
                     <p className="title">Trader Desktop</p>
                    <span className="pull-right"> 
                         <p className="username"><i>{localStorage.getItem('user')}</i></p>
                         <Link to={`/`} onClick={this.auth.bind(this)}>
                        <a>Sign Out</a>
                        </Link>
                    </span>
            </div>
                    <NavigationComponent {...this.props}/>
            
            </div>
            </MuiThemeProvider>
        )
    }
};


export default HeaderComponent;