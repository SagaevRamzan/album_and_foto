const initialState={
    albooms:[],
    load:false,
};
export default (state=initialState,action)=>{
    switch (action.type){
        case `ALBOOM_LOAD_START`:
            return {...state,load: true}
        case `ALBOOM_LOAD_SUCCESS`:
            return {...state,albooms: action.payload, load: false}

        default:return state


    }
}