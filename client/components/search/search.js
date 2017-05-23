import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import { hashHistory } from 'react-router';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    componentWillMount() {
        this.props.search("");
        cookie.save('search', '');
        cookie.save('sortItem', 'BestMatch');
    }
    componentDidMount() {
        this.props.isLoading(true);

    }
    componentDidUpdate() {
        this.props.isLoading(true);
    }
    search() {
        var searchInput = ReactDOM.findDOMNode(this.refs.searchInput).value;
        if (searchInput) {
            cookie.save('search', searchInput);
            hashHistory.push(`/search`);
        }
        else {
            this.props.deleteData();
            cookie.save('search', '');
            alert("No input!");
        }

        this.props.search(searchInput);
    }
    render() {
        return (
            <div>
                <div className="Search col-xs-8 col-xs-offset-2">
                    <p><span className="glyphicon glyphicon-search"></span> Search for Repositories </p>
                    <input type="text" placeholder="Search GitHub" className="form-control" ref="searchInput" />
                    <br />
                    <input type="button" onClick={this.search.bind(this)} className="btn btn-success pull-right" value="Search" />
                </div>
            </div>
        )
    }


}

export default SearchComponent;