import axios from 'axios'

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function traderFetchDataSuccess(traders) {
    //console.log(items);
    return {
        type: 'TRADERS_FETCH_DATA_SUCCESS',
        traders
    };
}

export function stockFetchDataSuccess(items) {
    return {
        type: 'STOCKS_FETCH_DATA_SUCCESS',
        items
    };
}

export function ordersFetchDataSuccess(orders) {
    return {
        type: 'ORDERS_FETCH_DATA_SUCCESS',
        orders
    };
}

export function getStocks(url){
    return (dispatch) => {
             return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
				dispatch(stockFetchDataSuccess(response.data));
			})
			.catch(function(response){
				dispatch(itemsHasErrored(response.data));
				// dispatch(pushState(null,'/error'));
        })
      }
}
export function deleteOrders(url){
    return (dispatch) => {
             return axios({
			url: url,
			timeout: 20000,
			method: 'delete',
			responseType: 'json'
		})
		// 	.then(function(response) {
        //         console.log(response.data);
		// 		dispatch(deleteDataSuccess(response.data));
		// 	})
		// 	.catch(function(response){
		// 		dispatch(itemsHasErrored(response.data));
		// 		// dispatch(pushState(null,'/error'));
        // })
      }
}

export function getTraders(url,data=undefined) {
    return (dispatch) => {
        if(data){
      return axios({
			url: url,
			timeout: 0,
			method: 'post',
            data,
			responseType: 'json'
		})
			.then(function(response) {
				dispatch(itemsFetchDataSuccess(response.data));
			})
			.catch(function(response){
   
				dispatch(itemsHasErrored(false));
				// dispatch(pushState(null,'/error'));
        })}
        else if(!data){
             return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
                console.log(response.data);
				dispatch(traderFetchDataSuccess(response.data));
			})
			.catch(function(response){
				dispatch(itemsHasErrored(response.data));
				// dispatch(pushState(null,'/error'));
        })
        }
	
    };
}

export function selectUser(user){
    return {
        type:'SELECT_USER_NAME',
        user
    }
}

export function getOrders(url) {
    return (dispatch) => {
      return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
				dispatch(ordersFetchDataSuccess(response.data));
			})
			.catch(function(response){
				dispatch(itemsHasErrored(false));
        })}
}

export function changeView(view){
    return {
        type:'VIEW_CHANGED',
        view
    }
}

export function updateOrderSocket(msg,data={}){
    return {
        type:msg,
        data
    }
}

export function notify(){
    return{
        type:'NOTIFICATION'
    }
}

