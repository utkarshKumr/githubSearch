import React from 'react';
import ReactDOM from 'react-dom';
class LoginComponent extends React.Component{

    componentDidMount(){
        console.log("inside did mount")
        this.props.getTraders("http://localhost:8080/users");
    }

    traderLogin(){
       console.log(ReactDOM.findDOMNode(this.refs.traderName).value);
    }
    render(){
        
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
            <button className="btn btn-primary" onClick={this.traderLogin.bind(this)}>Login</button>
            </div>
        </div>)
    }
};


export default LoginComponent;