import React from 'react';

class Main extends React.Component{

    // componentDidMount(){
        
    //     this.props.getTraders("http://10.203.60.100:3000/get_et");
    // }


    render(){
        return (
        <div>
           
            {React.cloneElement(this.props.children,this.props)}
        </div>)
    }
};


export default Main;