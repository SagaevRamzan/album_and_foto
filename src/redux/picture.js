  const initialState={
       picture:false,
};
export default (state=initialState,action)=>{
    switch (action.type){
        case `PICTURE_CLICK`:
            return {...state,picture: action.payload}

        default:return state


    }
}