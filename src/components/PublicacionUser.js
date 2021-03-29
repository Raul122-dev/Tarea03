import publicacion1 from '../assets/publicacion1.png'
import like from '../assets/like.svg'

const PublicUser = (props) => {
    return(
        <div className="container-fluid-card d-flex justify-content-center">
            <div className="card">
                <div className="row">
                    <div className="col-1">
                        <img className="img_card_info" src={props.publicacion.img_user}/>
                    </div>
                    <div className="col-10">
                        <b><p>{props.publicacion.nombre}</p></b>
                        <div className="public-content">
                            <div className="public-text">
                                <p>{props.publicacion.publicacion_text}</p>
                            </div>
                            <div className="public-img">
                                <img className="img_public" src={props.publicacion.img_publicacion} alt=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <img className="icon_publicacion" src={like}/>
                                <div className="text_acciones">
                                    <p>{props.publicacion.likes}</p> 
                                </div>    
                            </div>
                            <div className="col-3">
                                <img className="icon_publicacion" src="https://img.icons8.com/cute-clipart/64/000000/chat.png"/>
                                <div className="text_acciones">
                                    <p>{props.publicacion.comentarios}</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <img className="icon_publicacion" src="https://img.icons8.com/cute-clipart/64/000000/share.png"/>
                                <div className="text_acciones">
                                    <p>{props.publicacion.compartir}</p>
                                </div>
                            </div>
                            <div className="col-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img className="icon_publicacion" src="https://img.icons8.com/fluent/48/000000/menu-2.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicUser