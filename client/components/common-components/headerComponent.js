import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import NavigationComponent from '../common-components/navbar.component';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }
    auth() {
        cookie.remove('id', { path: '/' });
        localStorage.removeItem('user');
    }
    render() {
        if (this.props.user.length > 0)
            localStorage.setItem('user', this.props.user);

            const styleNotification={
                margin:-5,
                marginTop:-10,
                height:20,
                width:25,
                padding:8 
            }
          const styleBadge={
              top:-25,
              right:0
          }
        return (

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
                <NavigationComponent {...this.props} />

            </div>

        )
    }
};


export default HeaderComponent;