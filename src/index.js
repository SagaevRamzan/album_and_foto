import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {
    ALBOOM_ITEM_CLICK,
    ALBOOM_LOAD_START,
    ALBOOM_LOAD_SUCCESS,
    FOTOS_LOAD_START,
    FOTOS_LOAD_SUCCESS
} from "./Constants/Constants";
const initialState={
    albooms:[],
    fotos:[],
    userSelect_id:null,
    loadAl:false,
    loadFoto:false
};
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case `ALBOOM_LOAD_START`:
            return {...state,loadAl: true}
        case `ALBOOM_LOAD_SUCCESS`:
            return {...state,albooms: action.payload, loadAl: false}
        case `FOTOS_LOAD_START`:
            return {...state, loadFoto:true}
        case `FOTOS_LOAD_SUCCESS`:
            return {...state, fotos: action.payload, loadFoto: false}
        case `ALBOOM_ITEM_CLICK`:
            return {...state,
                userSelect_id:action.payload,

            }
        default:return state


    }
}
const store=createStore(reducer,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode >
    <Provider store={store}>
        <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

