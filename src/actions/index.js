// Instead of direct string comparison, we should store the string in one array, and compare using that variable
//It is useful that way so that if we have to use ADD_MOVIES comparison at various places we can do it conveniently, and if we ever plan to change the name of action type, then we just have to change it at one place, instead of changing it everywhere.

//Action Types
export const ADD_MOVIES = 'ADD_MOVIES';

// Action Creators - We are defining these here, instead of hard coading to improve flexibility of our code.
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies: movies,
    }
}