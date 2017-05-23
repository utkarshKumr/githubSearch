import React from 'react';
import cookie from 'react-cookie';
import RepoList from './repoList';
import ReactPaginate from 'react-paginate';



class SearchResults extends React.Component {

    componentDidMount() {
        this.props.isLoading(true);
        this.props.getSearch(`https://api.github.com/search/repositories?q=${cookie.load('search')}`);

    }
    sortUpdate(event) {
        localStorage.setItem('results', JSON.stringify(this.props.searchedData));
        cookie.save('sortItem', event.target.value);
        this.setState({ sort: event.target.value });
    }

    sortData(parameter, order) {
        var data = localStorage.getItem('results');
        data = JSON.parse(data);
        if (order === 'decending')
            data.sort(function (a, b) {
                return b[parameter] - a[parameter];
            })
        else if (order === 'ascending')
            data.sort(function (a, b) {
                return a[parameter] - b[parameter];
            })
        return data;

    }
    render() {
        var list;
        let sortItem = cookie.load('sortItem');
        if (sortItem === 'BestMatch')
            list = this.props.searchedData.map((item, index) => {
                return <RepoList key={Math.random() * index} element={item} {...this.props}></RepoList>
            });
        else {
            var temp;
            if (sortItem === 'mostStars')
                temp = this.sortData('stargazers_count', 'decending');
            else if (sortItem === 'fewestStars')
                temp = this.sortData('stargazers_count', 'ascending');
            else if (sortItem === 'mostForks')
                temp = this.sortData('forks_count', 'decending');
            else if (sortItem === 'fewestForks')
                temp = this.sortData('forks_count', 'ascending');

            list = temp.map((item, index) => {
                return <RepoList key={Math.random() * index} element={item} {...this.props} ></RepoList>
            });
        }


        if (this.props.loading)
            return (
                <h1>loading..</h1>
            )
        else if (this.props.searchedData.length > 0 && this.props.loading === false)
            return (
                <div className="container col-xs-12">
                    <h3 className="col-xs-6">{this.props.count} repository results</h3>
                    <select className="col-xs-12 col-md-3 cols-sm-6 pull-right sortSelect" onChange={this.sortUpdate.bind(this)} value={cookie.load('sortItem')}>
                        <option value="BestMatch">Best Match</option>
                        <option value="mostStars">Most Stars</option>
                        <option value="fewestStars">Fewest Stars</option>
                        <option value="mostForks">Most Forks</option>
                        <option value="fewestForks">Fewest Forks</option>
                    </select>
                    <nav>
                        <ul>
                            {list}
                        </ul>
                    </nav>
                </div>
            )

        else
            return (
                <h1>No data to display</h1>
            )
    }
}

export default SearchResults;