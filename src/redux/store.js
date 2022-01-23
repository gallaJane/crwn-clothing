import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger'; // this is something that is nice for us to use when debugging our redux code

import rootReducer from './root-reducer';

// setting up the middlewares

const middlewares = [logger]; //inside is our logger middleware

//createStore is the function that gets both, root-reducer and also the return value of
// applyMiddlewares and inside of this applyMiddleware we are goding to spread our middlewares
//what this will do is this will spread in all of the methods or all of the values in this function
// as individual arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;