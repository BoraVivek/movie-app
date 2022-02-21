// Importing action ADD_MOVIES from actions
import { ADD_MOVIES } from "../actions";

// Creating the reducer, which gets the new state as first argumnet, and action as second argument. And based on the action type, we return the newState to the store.

// Defining initial state for Store.
const initialMoviesState = {
    list: [],
    favourites: []
}

//Here if the action type is ADD_MOVIES then we return the movies to the state, and it becomes the value of the state.
export default function movies(state = initialMoviesState, action) {
    // If action type is ADD_MOVIES then we perform some actions, else we return the previous state
    if (action.type === ADD_MOVIES) {
        // Here we are spreading the default state, and then over-riding the list property with the list of movies
        return {
            ...state,
            list: action.movies
        }
    }

    // Returning previous state, if action.type doesn't match any condition
    return state;
}

