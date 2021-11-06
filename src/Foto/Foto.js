import {useSelector} from "react-redux";

const Foto=(props)=>{
    const picture=useSelector(state=>state.picture.picture)
    if(picture===true){ return <div className="foto_header">
                                    <div className="foto_id">{props.foto.title}</div>
                                    <img  src={props.foto.url} className="foto_pict"/>
                                </div>}
    else {return <div className="foto_header">
                     <div className="foto_id_1">{props.foto.title}</div>
                     <img  src={props.foto.url} className="foto_pict_1"/>
                  </div>}
}
export default Foto