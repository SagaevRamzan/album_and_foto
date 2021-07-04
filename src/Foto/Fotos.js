import {useSelector} from "react-redux";
import Foto from "./Foto";

const Fotos=()=>{
    const fotos=useSelector(state=>state.fotos);
    const userSelect_id=useSelector(state=>state.userSelect_id)
    const userFiltered=fotos.filter(foto=>{
        if(foto.albumId===userSelect_id){
            return true
        }
        return false
    })
    return <div className="foto_id">
        {userFiltered.map(foto=>{
            return <Foto foto={foto} key={foto.id}/>
        })}
    </div>

}

export default Fotos;