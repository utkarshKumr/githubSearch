import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
class LoginComponent extends React.Component{

    componentDidMount(){
        console.log("inside did mount")
        this.props.getTraders("http://localhost:8080/users");
    }
    traderLogin(){
        let user=ReactDOM.findDOMNode(this.refs.traderName).value;
        var select;
        for(let u of this.props.traders){
            if(u.name === user)
                select=u.id;
        }
        this.props.userName(user);
    }
    render(){
            console.log(this.props.traders);
        return (
        
        <div className="container">
            <h1>Login</h1>
            <br/>

            <div className="form-inline">
            <select className="form-control" ref="traderName">
                {this.props.traders.map((item)=>(
                <option key={item.id}> {item.name} </option>
                ))}
            </select>
            </div>
            <br/>
            <div>
            <Link to={`/view/`}>
            <input type="button" className="btn btn-primary"  onClick={this.traderLogin.bind(this)} value="Login"></input>
            </Link>
            </div>
        </div>)
    }
};


export default LoginComponent;