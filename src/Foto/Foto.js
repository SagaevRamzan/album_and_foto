import {useSelector} from "react-redux";
import {useState} from "react";

const Foto=(props)=>{

    return <div className="foto_header">
              <div className="foto_id">{props.foto.title}</div>
              <img src={props.foto.url} className="foto_pict"/>
           </div>

}
export default Foto