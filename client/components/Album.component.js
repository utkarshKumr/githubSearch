import React from 'react';
import PhotoDetails from './PhotoDetails';

class AlbumComponent extends React.Component{
    render(){
        return (<div>
        <h1>Albums Here </h1>
        {
            this.props.myposts.map((post,index)=>{
                return  <PhotoDetails post={post} i={index} key={index} {...this.props}/> 
            })
        }
           
        </div>)
    }
}

export default AlbumComponent;