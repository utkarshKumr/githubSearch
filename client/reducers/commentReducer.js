export default function comments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log('Within comment reducers!');
            return state;
        default:
            return state;


    }
}