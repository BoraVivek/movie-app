import React from "react";
import { addMoviesToList, handleMovieSearch } from "../actions";

class Navbar extends React.Component {

    // Constructor
    constructor(props) {
        // Call the super constructor
        super(props);

        // Set the state
        this.state = {
            showSearchResults: true,
            searchText: '',
        };
    }

    // Handles adding Movies to list
    handleAddToMovies = (movie) => {
        // Dispatches the action of adding movie to the list
        this.props.dispatch(addMoviesToList(movie));

        // Sets the state of showSearchResults to false
        this.setState({
            showSearchResults: false
        })
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
        // Getting the showSearchResults state
        const { showSearchResults } = this.state;

        // Temporary Data
        const data = [
            {
                Poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                Title: "Spiderman"
            }
        ];

        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {/* If showSearchResults is true, then show the result */}
                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={data[0].Poster} alt="search-pic" />

                                <div className="movie-info">
                                    <span>{data[0].Title}</span>
                                    <button onClick={() => this.handleAddToMovies(data[0])}>
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