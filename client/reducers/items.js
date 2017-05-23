
export function searchInput(state='',action){
    switch(action.type){
        case 'SEARCH_INPUT':
            return action.data;
        default:
            return state;    
    }
}

export function searchedData(state=[],action){
    
    switch(action.type){
        case 'RESULT_DATA':
        {
            return action.data.items;
        }
        case 'DELETE_DATA':
            return [];
        default:
            return state;    
    }
}

export function loading(state=true,action){
    switch(action.type){
        case 'LOADING_STATUS':
            return action.bool;
        default:
            return state;    
    }
}

export function activeElement(state={},action){
    switch(action.type){
        case 'ACTIVE_REPO':
            return action.data;
        default:
            return state;    
    }
}

export function count(state=0,action){
    switch(action.type){
        case 'DATA_COUNT':
            return action.data;
        default:
            return state;    
    }
}