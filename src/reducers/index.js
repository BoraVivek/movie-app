// Importing action ADD_MOVIES from actions
import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

// Defining initial state for Store.
const initialMoviesState = {
    list: [],
    favourites: []
}

// Creating the reducer, which gets the new state as first argumnet, and action as second argument. And based on the action type, we return the newState to the store.
//Creating reducer for our store, which performs various actions based on the type of action provided.
export default function movies(state = initialMoviesState, action) {

    switch (action.type) {
        //If action type is ADD_MOVIES then we add the movies list to the state
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies,
            };
        //If action type is ADD_FAVOURITE then we add the movie to the favourite item 
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                // Filtering out the movie from the favourites list which we want to remove
                favourites: state.favourites.filter((movie) => {
                    return movie.imdbID !== action.movie.imdbID;
                })
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        //If no action type is present then we return the previous state.
        default:
            return state;
    }
}

