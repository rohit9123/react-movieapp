import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './component/App';
import movies from './reducers'

const store=createStore(movies)
console.log(store)

store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{name:"superman"}]
})

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App  store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


