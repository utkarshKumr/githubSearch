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

export function getTraders(url){
    return (dispatch)=>{
        fetch(url).then((response)=>{
            return response;
        })
        .then((response) => response.json())
        .then((traders) => dispatch(traderFetchDataSuccess(traders)))
        .catch(() => dispatch(itemsHasErrored(true)));
    }
}

export function getStocks(url){
    return (dispatch)=>{
        fetch(url).then((response)=>{
            return response;
        })
        .then((response) => response.json())
        .then((items) => {
            dispatch(stockFetchDataSuccess(items.stock));
        })
        .catch(() => dispatch(itemsHasErrored(true)));
    }
}