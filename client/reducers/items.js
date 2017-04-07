// export function itemsHasErrored(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_HAS_ERRORED':
//             return action.hasErrored;

//         default:
//             return state;
//     }
// }

// export function itemsIsLoading(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_IS_LOADING':
//             return action.isLoading;

//         default:
//             return state;
//     }
// }

// export function items(state = [], action) {
//     switch (action.type) {
//         case 'ITEMS_FETCH_DATA_SUCCESS':
//             return action.items;

//         default:
//             return state;
//     }
// }

export function traderItems(state = [], action) {
    console.log('insdide reducer');
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'TRADERS_FETCH_DATA_SUCCESS':
            return action.traders;

        default:
            return state;
    }
}

export function stockItems(state = [], action) {
    console.log('insdide reducer');
    console.log(action);
    switch (action.type) {
        case 'STOCKS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}

export function newUser(state="",action){
    switch(action.type){
        case 'SELECT_USER_NAME':
            return action.user;

        default:
            return state;    
    }
}