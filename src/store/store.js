import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

var store = createStore(
  rootReducer,
  { videoList: exampleVideoData, currentVideo: exampleVideoData[0] }, applyMiddleware(thunk), storeEnhancers
  
);

export default store;
