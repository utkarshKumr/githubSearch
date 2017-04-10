import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
class LoginComponent extends React.Component{
constructor(props)
{
    super(props);
    this.state = {
            id : 'AM',
            name : 'Amadeus Mozart'
    }
    this.props.userName(this.state.name);
}

    // componentWilMount(){
    //     this.props.userName(this.state.name);
    // }
    componentDidMount(){
        this.props.getTraders("http://localhost:8080/users");
    }
    
    traderLogin(){
        let user=ReactDOM.findDOMNode(this.refs.traderName).value;
    this.props.traders.map((item)=>{
        if(user===item.name)
        {

         this.setState({id:item.id,name:item.name});
        }
    })
        this.props.userName(user);
    
    }
    render(){
        return (
        
        <div className="container">
            <h1>Login</h1>
            <br/>

            <div className="form-inline">
            <select className="form-control" ref="traderName" onChange={this.traderLogin.bind(this)}  >
                {this.props.traders.map((item)=>(
                <option key={item.id}> {item.name} </option>
                ))}
            </select>
            </div>
            <br/>
            <div>
            <Link to={`/view/${this.state.id}`}>
            <input type="button" className="btn btn-primary" value="Login"></input>
            </Link>
            </div>
        </div>)
    }
};


export default LoginComponent;