const initialState={
    filter:"",
    fotos:[],
    load:false
};
export default  (state=initialState,action)=>{
    switch (action.type){
       case `FOTOS_LOAD_START`:
            return {...state, load:true}
        case `FOTOS_LOAD_SUCCESS`:
            return {...state, fotos: action.payload, load: false}
        case 'FOTOS_FILTER':
            return {
                ...state,
                filter: action.payload
            }
        default:return state


    }
}