import {Link} from "react-router-dom";


function Alboom(props){

    return <div className="alb_id" >
        <Link to={`/${props.alboom.id}`}>
            <a className="ssylka">{props.alboom.title}</a>
        </Link>
           </div>

}

export default Alboom;