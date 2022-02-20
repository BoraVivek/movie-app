import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { data } from "../data"


class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;

    // Subscribing to the store, inside the subscribe we pass a callback function. Which gets called whenever an action is dispatched to the store.
    store.subscribe(() => {
      console.log("Updated"); // This gets printed just after an action has been dispatched to the store

      // It is not advised to use forceUpdate. It is used for forcefully updating the component. We should never use this method
      this.forceUpdate();
    });

    //Make API Call

    console.log("Dispatch"); //This gets printed First

    //Dispatching action of ADD_MOVIES to the store , which gets passed to the reducer, and then reducer performs some activity based on the type of action and then return the new state to the store. Then Store replaces its state with the new state sent by the reducer.
    // After the dispatch takes place, instantly the subscribe callback function is called after the dispatch of action.
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data,
    });

    // This log takes place at last, after the subscribe callback has been performed after the dispatch of action to the store.
    console.log("STATE", store.getState());
  }

  render() {
    const movies = this.props.store.getState();

    return (
      <div className="App" >
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard key={`movies-${index}`} movie={movie} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
