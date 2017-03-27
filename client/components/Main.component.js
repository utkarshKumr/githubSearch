import React from 'react';
class Main extends React.Component{
    componentDidMount(){
        this.props.fetchData()
    }
    render(){
        return (<div>
        <h1>Using Routes</h1>

        {/*{React.cloneElement(this.props.children,this.props)}*/}
        </div>)
    }
}

export default Main;