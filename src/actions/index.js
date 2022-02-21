// Instead of direct string comparison, we should store the string in one array, and compare using that variable
//It is useful that way so that if we have to use ADD_MOVIES comparison at various places we can do it conveniently, and if we ever plan to change the name of action type, then we just have to change it at one place, instead of changing it everywhere.

//Action Types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'

// Action Creators - We are defining these here, instead of hard coading to improve flexibility of our code.
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies: movies,
    }
}

// Add Favourite - Action Creator
export function addToFavourite(movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie: movie,
    }
}

// Remove Favourite - Action Creator
export function removeFromFavourite(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

// Action for enabling the show Favourites tab
export function setShowFavourites(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}