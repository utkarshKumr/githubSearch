import React from 'react';
import { connect } from 'react-redux';
import { 
    getSearch,search,deleteData,isLoading, activeRepo
} from '../actions/index';
import Main from './Main.component';

  const mapStateToProps = (state) => {
        return {
            searchInput:state.searchInput,
            searchedData:state.searchedData,
            loading:state.loading,
            activeElement:state.activeElement,
            count:state.count
        };
    }

const mapDispatchToProps = (dispatch) => {
        return {
            getSearch: (url) => dispatch(getSearch(url)),
            search:(data) => dispatch(search(data)),
            deleteData:()=>dispatch(deleteData()),
            isLoading:(bool)=>dispatch(isLoading(bool)),
            activeRepo:(element)=>dispatch(activeRepo(element))
        };
    }
    var App=connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
