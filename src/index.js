import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// Creating Store and Passing reducer to the store, reducer gets triggered whenever a new action is dispatched to the store.
const store = createStore(rootReducer); //Passing the root reducer to the createStore function

console.log('store', store.getState());
// console.log("BEFORE STATE", store.getState());

//Dispatching action of ADD_MOVIES to the store , which gets passed to the reducer, and then reducer performs some activity based on the type of action and then return the new state to the store. Then Store replaces its state with the new state sent by the reducer.
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: "Superman" }]
// });

// console.log("AFTER STATE", store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);