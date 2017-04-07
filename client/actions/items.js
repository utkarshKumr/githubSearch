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
    console.log(items);
    return {
        type: 'STOCKS_FETCH_DATA_SUCCESS',
        items
    };
}

// export function itemsFetchData(url) {
//     return (dispatch) => {
//         dispatch(itemsIsLoading(true));

//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }

//                 dispatch(itemsIsLoading(false));

//                 return response;
//             })
//             .then((response) => response.json())
//             .then((items) => dispatch(itemsFetchDataSuccess(items)))
//             .catch(() => dispatch(itemsHasErrored(true)));
//     };
// }

// export function getTraders(url){
//     return (dispatch)=>{
//         fetch(url).then((response)=>{
//             return response;
//         })
//         .then((response) => response.json())
//         .then((traders) => dispatch(traderFetchDataSuccess(traders)))
//         .catch(() => dispatch(itemsHasErrored(true)));
//     }
// }

// export function getStocks(url){
//     return (dispatch)=>{
//         fetch(url).then((response)=>{
//             return response;
//         })
//         .then((response) => response.json())
//         .then((items) => {
//             dispatch(stockFetchDataSuccess(items.stock));
//         })
//         .catch(() => dispatch(itemsHasErrored(true)));
//     }
// }

export function getTraders(url,data=undefined) {
    console.log(data,url);
    return (dispatch) => {
        if(data){
            console.log("post called")
      return axios({
			url: url,
			timeout: 0,
			method: 'post',
            data,
			responseType: 'json'
		})
			.then(function(response) {
                console.log(response.data)
				dispatch(itemsFetchDataSuccess(response.data));
			})
			.catch(function(response){
                console.log("no")
				dispatch(itemsHasErrored(false));
				// dispatch(pushState(null,'/error'));
        })}
        else if(!data){
            console.log("get called");
             return axios({
			url: url,
			timeout: 0,
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
