import React from "react";
import { addMoviesToList, handleMovieSearch } from "../actions";

class Navbar extends React.Component {

    // Constructor
    constructor(props) {
        // Call the super constructor
        super(props);

        // Set the state
        this.state = {
            searchText: '',
        };
    }

    // Handles adding Movies to list
    handleAddToMovies = (movie) => {
        // Dispatches the action of adding movie to the list
        this.props.dispatch(addMoviesToList(movie));
    }

    // Used for handling search
    handleSearch = () => {
        //Gets the search Text from state
        const { searchText } = this.state;

        //Dispatches the handle movie search action
        this.props.dispatch(handleMovieSearch(searchText));
    };

    // Handles the changes in search text
    handleChange = (e) => {
        // Sets the search text to the state
        this.setState({
            searchText: e.target.value,
        });
    };

    render() {

        // Here we are destructuring the props.search object, and getting the result, which we are renaming as movie
        const { result: movie, showSearchResults } = this.props.search;

        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {/* If showSearchResults is true, then show the result */}
                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="search-pic" />

                                <div className="movie-info">
                                    <span>{movie.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(movie)}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </div>
        );
    }

}

export default Navbar;