import chat from '../assets/chat.svg';
import activo from '../assets/activo.svg';
import menu from '../assets/menu.svg';
import busqueda from '../assets/busqueda.svg';
import facebook_log from '../assets/facebook_f_logo.svg';

const NavBar = () => {
    return(
        <div className="navbar navbar-dark bg-primary">
            <img className="img_facebook" src={facebook_log} alt="#"/>
            <div>
                <img src={busqueda} alt="#"/>
                <input className="input-bus" placeholder="Buscar...."/>
            </div>
            <div className="opciones">
                <img src={chat} alt="#"/>
                <img src={activo} alt="#"/>
                <img src={menu} alt="#"/>
            </div>
        </div>
    )
}

export default NavBar