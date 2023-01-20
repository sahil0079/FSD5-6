import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'


//STORE => CONTAINS A GLOBALIZED STATE

//ACTIONS

const increment = () => {

  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {

  return {
    type: 'DECREMENT'
  }
}




//REDUCER

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counterReducer)


//display the output in the console

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //component
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
