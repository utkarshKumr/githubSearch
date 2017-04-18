import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import cookie from 'react-cookie';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as links from '../common-components/app.config';
class LoginComponent extends React.Component{

constructor(props)
{
    super(props);
    this.state = {
            value:0,
            id : 'AM',
            name : 'Amadeus Mozart'
    }
    this.handleChange = this.handleChange.bind(this);

    this.props.userName(this.state.name);
}

    componentDidMount(){
        this.props.getTraders(links.users);
    }
    handleChange(event, index,value) {
      console.log("ri");
      this.setState({id:value});
      let userId=value;
      let user;
      var id;
      this.props.traders.map((item)=>{
          if(userId===item.id)
          {
            user=item.name;
           this.setState({id:item.id,name:item.name});
           id=item.id;
          }
      })
          this.props.userName(user);
    }
    // traderLogin(){
    //   console.log(ReactDOM.findDOMNode(this.refs.traderName).value);
    //     let user=ReactDOM.findDOMNode(this.refs.traderName).value;
    //     var id;
    // this.props.traders.map((item)=>{
    //     if(user===item.name)
    //     {
    //      this.setState({id:item.id,name:item.name});
    //      id=item.id;
    //     }
    // })
    //     this.props.userName(user);
    // }

    // auth(){
    //     cookie.save('id', this.state.id, { path: '/' });
    // }
       firebaseAuth(){

        console.log('firebaseAuth called');
        var name=this.state.name;
        var id=this.state.id;
        var removeSpace=new RegExp(' ','g');

        var email=id.toLowerCase().concat('@gmail.com');
        var password=this.refs.password.getValue();//name.replace(removeSpace,'').toLowerCase();
        console.log(email,password);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=>{
                console.log('authenticated');
                //cookie.save('id', this.state.id, { path: '/' });
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
      const style = {
        height: 500,
        width: 500,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        opacity: 0.8
      }
      const hstyle=
      {   textAlign:'center',
        marginTop: 0,
        opacity: 0.7,
        padding: 30,
        backgroundColor: "black",
        color:"white"
      }
      const powered={
         padding: 10,
         opacity: 0.7,
         marginTop: 120,
         lineHeight: 3,
         backgroundColor: "black",
         color:"white"

      }

      const styles = {
        margin: 12,
        backgroundColor:"#FFCDD2",
        width:20
      }
        return (

        <div className="login container">
            <center>
            <Paper style={style} zDepth={5} rounded={false}>
            <div>
              <h1 style={hstyle}>Trader Login</h1>
            </div>
            <br/>
            <form className="form-horizontal">
            <SelectField maxHeight={300} value={this.state.id} onChange={this.handleChange}>
            {this.props.traders.map((item,index)=>
            <MenuItem value={item.id} key={index} primaryText={item.name}/>
            )}
            </SelectField>
            <TextField hintText="Password Field" floatingLabelText="Password" ref="password" type="password"/>
            <br/>
            {/*<Link to={`/view/${this.state.id}`} onClick={this.auth.bind(this)}>
            <input type="button" className="btn btn-primary  pull-right" value="Login"></input>
            </Link>*/}
            <RaisedButton label="Login" primary={true} style={styles}  onClick={this.firebaseAuth.bind(this)}/>
            </form>
            <div>
                <h5 style={powered}>Powered by Prime</h5>
              </div>
            </Paper>
            </center>

        </div>)
    }
};


export default LoginComponent;
