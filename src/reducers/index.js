// Creating the reducer, which gets the new state as first argumnet, and action as second argument.
export default function movies(state, action) {
    if (action.type === 'ADD_MOVIES') {
        return action.movies;
    }

    return state;
}