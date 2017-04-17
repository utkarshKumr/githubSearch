import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import cookie from 'react-cookie';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router';

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

    componentDidMount(){
        this.props.getTraders("http://localhost:8080/users");
    }
    
    traderLogin(){
        let user=ReactDOM.findDOMNode(this.refs.traderName).value;
        var id;
    this.props.traders.map((item)=>{
        if(user===item.name)
        {

         this.setState({id:item.id,name:item.name});
         id=item.id;
        }
    })
        this.props.userName(user);
    }

    // auth(){
    //     cookie.save('id', this.state.id, { path: '/' });
    // }
       firebaseAuth(){
        
        console.log('firebaseAuth called');
        var name=this.state.name;
        var id=this.state.id;
        var removeSpace=new RegExp(' ','g');

        var email=id.toLowerCase().concat('@gmail.com');
        var password=name.replace(removeSpace,'').toLowerCase();
        console.log(email,password);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=>{
                console.log('authenticated');
                cookie.save('id', this.state.id, { path: '/' });
                console.log(this.state.id);
                browserHistory.push(`/view/${this.state.id}`);
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }


    render(){
        return (
        
        <div className="container "> 
            <h1>Login</h1>
            <br/>

            <div className="form-horizontal col-md-6  col-sm-6 col-xs-12">
            <select className="form-control " ref="traderName" onChange={this.traderLogin.bind(this)}  >
                {this.props.traders.map((item)=>(
                <option key={item.id}> {item.name} </option>
                ))}
            </select>
            </div>
            <br/>
           
            <div className="col-xs-12  col-sm-4 col-md-4">
            {/*<Link to={`/view/${this.state.id}`} onClick={this.auth.bind(this)}>
            <input type="button" className="btn btn-primary  pull-right" value="Login"></input>
            </Link>*/}
            <input type="button" className="btn btn-primary  pull-right" onClick={this.firebaseAuth.bind(this)} value="Login"></input>
            </div>
        </div>)
    }
};


export default LoginComponent;