export function increment(index) {
    return {
        type: 'INCREMENT_LIKE',
        index
    }
}
export function addComment() {
    return {
        type: 'ADD_COMMENT'
    }
}
export function removeComment() {
    return {
        type: 'REMOVE_COMMENT',
        index
    }
}