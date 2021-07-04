import {useSelector} from "react-redux";
import Alboom from "./Alboom";

function Albooms(){
const albooms=useSelector(state=>state.albooms);


    return <div className="alb_id">
        {albooms.map(alboom=>{
            return <Alboom alboom={alboom} key={alboom.id}/>
        })}

        </div>


}

export default Albooms;