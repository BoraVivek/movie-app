import React from "react";
import { addFavourite } from "../actions";

class MovieCard extends React.Component {

    // Function which dispatches the ADD_FAVOURITE action.
    handleFavouriteClick = () => {
        // Getting the movie from the props
        const { movie } = this.props;
        console.log(this.props);

        // Dispatching the event of adding Favourite movie to the store.
        this.props.dispatch(addFavourite(movie));
    }

    //TODO: Implement UNfavrourite button
    handleUnFavouriteClick = () => {

    }

    render() {
        //Getting movie and isFavourite form props.
        const { movie, isFavourite } = this.props;

        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster" />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            // Checking if movie is already favourite and not, and accordingly show the button
                            isFavourite ?
                                <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>Un-Favourite</button> :
                                <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default MovieCard;