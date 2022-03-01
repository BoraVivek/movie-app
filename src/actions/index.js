// Instead of direct string comparison, we should store the string in one array, and compare using that variable
//It is useful that way so that if we have to use ADD_MOVIES comparison at various places we can do it conveniently, and if we ever plan to change the name of action type, then we just have to change it at one place, instead of changing it everywhere.

//Action Types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

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

// Action Creator for Adding movies to the list
export function addMoviesToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    };
}

// Handles the search of movies, it returns a async function instead of an object, which we need to then handle using the thunk
export function handleMovieSearch(movie) {
    const url = `http://www.omdbapi.com/?apikey=c12f0d8d&t=${movie}`;
    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log('movie', movie);

                //Dispatch an Action - For adding the searched move to the search result
                dispatch(addMovieSearchResult(movie))
            });
    }
}

// Action Creator - For Adding searched movie to Search Result
export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}