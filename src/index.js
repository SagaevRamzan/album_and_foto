import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import albooms from "./redux/albooms";
import fotos from "./redux/fotos";
import picture from "./redux/picture";
import {BrowserRouter} from "react-router-dom";

const rootReducer=combineReducers({
    albooms:albooms,
    fotos:fotos,
    picture:picture
})
const store=createStore(rootReducer,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode >
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

