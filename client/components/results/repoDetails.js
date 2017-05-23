import React from 'react';
import { Link } from 'react-router';
import cookie from 'react-cookie';

class RepoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: true
        }
    }
    changeTab() {
        this.setState({ tab: !this.state.tab });
    }


    render() {
        var element = localStorage.getItem("element");
        element = JSON.parse(element);
        console.log(element);
        return (
            <div>
                <Link to={`/search`}>
                    <input type="button" className="btn" value="<- Back" ></input>
                </Link>
                <br />
                <br />
                <ul className="nav nav-tabs">
                    <li role="presentation" onClick={this.changeTab.bind(this)} className={this.state.tab ? "active" : ""}><a>Home</a></li>
                    <li role="presentation" onClick={this.changeTab.bind(this)} className={this.state.tab ? "" : "active"}><a>Profile</a></li>
                </ul>
                <br />
                {
                    this.state.tab ?
                        (<div className="jumbotron container">
                            <h2>{element.full_name}</h2>
                            <p>{element.description}</p>
                            <p>Forks: {element.forks}</p>
                            <p>Watchers: {element.watchers}</p>
                            <p><a className="btn btn-primary pull-right" role="button">Learn more</a></p>
                        </div>)
                        : (
                            <div className="jumbotron container">
                                <a href={element.owner.html_url} className="userDetails" target="_blank">User Details</a>
                                <aside className="col-xs-3">
                                <img src={element.owner.avatar_url} width="50%" height="150px" />
                                </aside>
                                <h4>User: <i>{element.owner.login}</i></h4>
                                <p className="col-xs-5">ID: {element.owner.id}</p>
                                <p className="col-xs-5">Type: {element.owner.type}</p>
                                <p className="col-xs-5">Score: {element.score}</p>
                            </div>
                        )
                }
            </div>
        )
    }
}

export default RepoDetails;