import { combineReducers } from 'redux';

// Importing action ADD_MOVIES from actions
import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

// Defining initial state for Store.
const initialMoviesState = {
    list: [],
    favourites: []
}

// Creating the reducer, which gets the new state as first argumnet, and action as second argument. And based on the action type, we return the newState to the store.
//Creating reducer for our store, which performs various actions based on the type of action provided.
export function movies(state = initialMoviesState, action) {
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
                // Enabling or disabling the showFavourites state, to toggle the tabs in homepage.
                showFavourites: action.val
            }
        //If no action type is present then we return the previous state.
        default:
            return state;
    }
}

// Initial State for search Reducer
const initialSearchState = {
    result: {}
}

// Creating Search reducer which returns the state to the store.
export function search(state = initialSearchState, action) {
    return state;
}

// Initial State for Root Reducer
// const initialRootState = {
//     movies: initialMoviesState,
//     search: initialSearchState
// }


// Root reducer is used to combine, both movies, and search reducers, and returning them to the store.
// export default function rootReducer(state = initialRootState, action) {
// return {
// Movies will be managed by movies reducer
/**
 * Here on the movies property, we will call the movies function and pass the movies state, and action to the function, it will perform actions on it, and then return the state to the store.
 */
// movies: movies(state.movies, action),

//Search will be managed by search reducer
/**
 * Here on search property, we will call the search function/reducer and pass the search state, and action to the function, it will perform actions on it, and then return the state to the store.
 */
// search: search(state.search, action)
// }
// }

//Redux has an inbuilt function to combine reducers, we don't have to make our own functionality for that, we just have to pass an object to the combineReducers function with our keys for the state, and the reference to the reducer, which will handle the functionalities for those keys.
export default combineReducers({
    movies: movies, //* Internally it will call the reducer like this movies(state.movies, action),
    search: search
})