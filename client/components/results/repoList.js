import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import cookie from 'react-cookie';

class RepoList extends React.Component {
    openDetails() {
        console.log(this.props.element);
        this.props.activeRepo(this.props.element);
        localStorage.setItem('element', JSON.stringify(this.props.element));
        hashHistory.push(`/details/${this.props.element.full_name}`);
    }

    dateFormat() {
        console.log("format");
        var cell = this.props.element.updated_at.split('T');
        var time = cell[1].split('Z');
        return `${cell[0]}
        ${time[0]}`;
    }

    render() {
        var date = this.dateFormat();
        return (
            <li className="col-xs-12">
                <div>
                    <hr />
                    <a onClick={this.openDetails.bind(this)}><h3>{this.props.element.full_name}</h3></a>
                    <p>{this.props.element.description}</p>
                    <br />
                    <p>Updated on {date} </p>
                </div>
            </li>

        )
    }
}

export default RepoList;