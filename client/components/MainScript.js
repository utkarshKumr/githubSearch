import { connect } from 'react-redux';
import Main from './Main.component';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actionCreators/actions';


function mapStateToProps(stateMeansStore) {
    return {
        myposts: stateMeansStore.posts,
        mycomments: stateMeansStore.comments
    }
}

function mapDispactchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

var App = connect(mapStateToProps, mapDispactchToProps)(Main);

export default App;