import Header from "./Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {LoadAlboom, LoadFotos} from "./Actions/actions";
import Fotos from "./Foto/Fotos";
import Albooms from "./Alboom/Albooms";
import {Route} from "react-router-dom"


function App() {
    const loadAlb=useSelector(state=>state.loadAl);
    const loadFoto=useSelector(state=>state.loadFoto);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(LoadFotos())
        dispatch(LoadAlboom())
    },[]);
    if(loadAlb||loadFoto){
        return (
            <div>
                идет загрузка...
            </div>
        )
    }
  return (
    <div className="app">
        <Header/>
        <div className="header_title">
            <Albooms/>
            <div>
                <Route path="/:id?">
                 <Fotos/>
                </Route>
            </div>
        </div>
    </div>
  );
}

export default App;
