import {useDispatch, useSelector} from "react-redux";
import Foto from "./Foto";
import {setFilterText} from "../Actions/actions";
import {useParams} from "react-router-dom"


const Fotos=()=>{
    const fotos=useSelector(state=>state.fotos.fotos);
    const filterString=useSelector(state=>state.fotos.filter);
    const id=parseInt(useParams().id);
    const dispatch=useDispatch();
    if(isNaN(id)){
        return (
            <div className="no_user_selected">
                Выберите альбом в списке
            </div>
        )
    }
    const userFiltered=fotos
        .filter(foto=>foto.albumId===id)
        .filter(foto=>foto.title.indexOf(filterString)>-1);

    const handleChangeFilter=(event)=>{
        dispatch(setFilterText(event.target.value))
    }
    return <div className="foto_id">
        <input type="text" className="input" value={filterString} placeholder="Поиск" onChange={handleChangeFilter}/>
        {userFiltered.map(foto=>{

            return <Foto foto={foto} key={foto.id}/>

        })}
    </div>

}

export default Fotos;