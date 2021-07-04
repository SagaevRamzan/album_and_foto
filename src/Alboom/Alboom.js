import {useDispatch} from "react-redux";
import {LoadAlboomItem} from "../Actions/actions";


function Alboom(props){
     const dispatch=useDispatch();

     const handleClickFoto=()=> {
         dispatch(LoadAlboomItem(props.alboom.id))
     }


    return <div className="alb_id" onClick={handleClickFoto}><a href="#" className="ssylka">{props.alboom.title}</a></div>


}

export default Alboom;