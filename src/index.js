import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';
import App from './routes/App';

// definir estado global 

const initialState = {
  favoriteCharacters: [],
  sectionActive: 'Characters' ,
};

// https://www.npmjs.com/package/redux-devtools-extension

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
  reducer, 
  initialState, 
  composeEnhancers (applyMiddleware(logger)) // opcional
  ); 


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

