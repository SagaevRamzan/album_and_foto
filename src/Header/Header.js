import pict from './mein.jpg'
import {useDispatch, useSelector} from "react-redux";
import {setPicture_Click} from "../Actions/actions";

function Header(){
    const picture=useSelector(state=>state.picture.picture)
    const dispatch=useDispatch();
    const click_Pict=()=>{
             dispatch(setPicture_Click(picture))
    }
    return <div className="header">
                <div className="header_title">
                    <div className="alb_id_1">Альбом</div>
                        <div className="foto_id">Название произведения</div>
                        <a  className="ssylka_cat">
                            <img onClick={click_Pict} className="cat" src={pict}/>
                        </a>
                    </div>

                </div>
}

export default Header;