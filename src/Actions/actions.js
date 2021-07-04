import {
    ALBOOM_ITEM_CLICK,
    ALBOOM_LOAD_START,
    ALBOOM_LOAD_SUCCESS,
    FOTOS_LOAD_START,
    FOTOS_LOAD_SUCCESS
} from "../Constants/Constants";

export const LoadAlboom=()=>{
    return function (dispatch){
        dispatch({
            type:`ALBOOM_LOAD_START`
        })
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response=>response.json())
            .then(json=>{
                dispatch({
                    type:`ALBOOM_LOAD_SUCCESS`,
                    payload:json
                })
            })
    }
}
export const LoadFotos=()=>{
    return function (dispatch){
        dispatch({
            type:`FOTOS_LOAD_START`
        })
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response=>response.json())
            .then(json=>{
                dispatch({
                    type:`FOTOS_LOAD_SUCCESS`,
                    payload:json
                })
            })
    }

}
export const LoadAlboomItem=(id)=>{
    return{

          type:`ALBOOM_ITEM_CLICK`,
          payload:id

    }
}