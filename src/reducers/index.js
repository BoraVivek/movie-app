// Importing action ADD_MOVIES from actions
import { ADD_MOVIES } from "../actions";

// Creating the reducer, which gets the new state as first argumnet, and action as second argument. And based on the action type, we return the newState to the store.
//Here if the action type is ADD_MOVIES then we return the movies to the state, and it becomes the value of the state.
export default function movies(state = [], action) {
    if (action.type === ADD_MOVIES) {
        return action.movies;
    }

    return state;
}

