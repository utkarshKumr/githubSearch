export default function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKE':
            var index = action.index;
            return [
                ...state.slice(0, index), {
                    ...state[index],
                    likes: state[index].likes + 1
                },
                ...state.slice(index + 1)

            ];
        default:
            return state;
    }
}