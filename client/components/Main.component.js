import React from 'react';
class Main extends React.Component{


    render(){
        return (<div>
        <h1>Using Routes</h1>
        {this.props.children}
        </div>)
    }
}

export default Main;