import axios from 'axios'

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function resultsFetchDataSuccess(data) {
    return {
        type: 'RESULT_DATA',
        data
    };
}

export function count(data){
    return{
        type:'DATA_COUNT',
        data
    }
}

export function deleteData(){
    return{
        type:'DELETE_DATA'
    }
}

export function isLoading(bool){
    return{
        type:'LOADING_STATUS',
        bool
    }
}

export function getSearch(url){
    return (dispatch) => {
             return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
                dispatch(isLoading(false));
                dispatch(count(response.data.total_count));
				dispatch(resultsFetchDataSuccess(response.data));
			})
			.catch(function(response){
				dispatch(itemsHasErrored(response.data));
        })
      }
}

export function search(data){
    return{
        type:'SEARCH_INPUT',
        data
    }
}

export function activeRepo(data){
    return{
        type:'ACTIVE_REPO',
        data
    }
}

