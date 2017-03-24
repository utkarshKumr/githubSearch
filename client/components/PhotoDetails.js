import React from "react";
import {Link} from 'react-router';

export default class PhotoDetails extends React.Component {
  render() {
    return (
     <figure className="grid-figure">
         <div className="grid-photo-wrap">
           <Link to={`/view/${this.props.post.code}`}>
             <img src={this.props.post.display_src} height="100px" width="100px"/>
             </Link>
         </div>
         <p>{this.props.post.caption}</p>
         <button className="likes" onClick={this.props.increment.bind(this,this.props.i)}>{this.props.post.likes}</button>
         </figure>
    );
  }
}
