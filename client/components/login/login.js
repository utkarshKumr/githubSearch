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
import CircularProgress from 'material-ui/CircularProgress';

class LoginComponent extends React.Component{

constructor(props)
{
    super(props);
    this.state = {
            errorText:"",
            noview:0,
            view:0,
            value:0,
            id : 'AM',
            name : 'Amadeus Mozart'
    }
    this.handleChange = this.handleChange.bind(this);

    this.props.userName(this.state.name);
}

    componentDidMount(){
        this.props.getTraders("http://localhost:8080/users");
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
         this.setState({view:1});
         this.setState({noview:1});

        console.log('firebaseAuth called');
        var name=this.state.name;
        var id=this.state.id;
        var removeSpace=new RegExp(' ','g');
        var email=id.toLowerCase().concat('@gmail.com');
        var password=this.refs.password.getValue();
        console.log(email,password);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=>{
                console.log('authenticated');
                //cookie.save('id', this.state.id, { path: '/' });
                console.log(this.state.id);
                browserHistory.push(`/view/${this.state.id}`);
            })

            .catch((error)=> {
            // Handle Errors here.
            this.setState({view:0});
            this.setState({errorText:"Enter Valid Password"});
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

  }



    render(){
      if(this.state.noview==1)
      {
      if (this.state.view == 1) {
        console.log(this.state.view);
        document.getElementById("progressBar").style.visibility = "visible";
        document.getElementById("poweredBar").style.marginTop = "48px";
        document.getElementById("poweredBar").style.height = "11%";
      }
      else if (this.state.view == 0) {
            console.log(this.state.view);
            console.log(document.getElementById("progressBar"));
          document.getElementById("progressBar").style.visibility = "hidden";
          console.log(document.getElementById("progressBar"));
    }
}
      const style = {
        height: 500,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        position:'relative',
        width:'40%',
        width:'squeeze'

      }
      const hstyle=
      {   textAlign:'center',
        marginTop: 0,
        opacity: 0.7,
        padding: 30,
        backgroundColor: "black",
        color:"white",
        fontWeight:900
      }
      const powered={
        padding: 10,
        opacity: 0.7,
        marginTop:70,
        width:'100%',
        height:'12%',
        position:'absolute',
        lineHeight: 3,
        backgroundColor: "black",
        color:"white"

      }

      const pstyle = {
          visibility:'hidden'
            }
            const lstyle = {
                fontWeight:900
                  }
      const styles = {
        margin: 12,
        backgroundColor:"#FFCDD2",
        width:20
      }
        return (

        <div className="container">
            <center>
            <Paper className="login " style={style} zDepth={5} rounded={false}>
            <div>
              <h1 style={hstyle}>Trader Login</h1>
            </div>
            <br/>
            <form className="form-horizontal">
            <SelectField maxHeight={300} value={this.state.id} onChange={this.handleChange} labelStyle={lstyle}>
            {this.props.traders.map((item,index)=>
            <MenuItem value={item.id} key={index} primaryText={item.name}/>
            )}
            </SelectField><br/>
            <TextField hintText="Password Field" errorText={this.state.errorText} floatingLabelText="Password" ref='password' type="password"/>
            <br/>
            {/*<Link to={`/view/${this.state.id}`} onClick={this.auth.bind(this)}>
            <input type="button" className="btn btn-primary  pull-right" value="Login"></input>
            </Link>*/}
            <RaisedButton label="Login" primary={true} style={styles}  onClick={this.firebaseAuth.bind(this)}/>
            </form>
            <CircularProgress style={pstyle} id="progressBar"/>
            <div style={powered} id="poweredBar">
                <h5 >Powered by Sapient</h5>
              </div>
            </Paper>
            </center>

        </div>)
    }
};


export default LoginComponent;
