
const ContainerPublic = () => {
    return(
        <div className="container-fluid-card d-flex justify-content-center">
            <div className="card">
                <div className="row">
                    <div className="col-1">
                        <img className="img_card_info" src="https://img.icons8.com/cute-clipart/64/000000/private-emoticon.png"/>
                    </div>
                    <div className="col-10">
                        <b><p>Raul Game</p></b>
                        <div>
                            <textarea className="in-publicacion" type="text" rows="5" placeholder="Realiza una nueva publicacion.."></textarea>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <img className="icon_publicacion" src="https://img.icons8.com/cute-clipart/64/000000/video-message.png"/>
                                <div className="text_acciones">
                                    <p>Video</p> 
                                </div>    
                            </div>
                            <div className="col-3">
                                <img className="icon_publicacion" src="data:image/png;base64,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"/>
                                <div className="text_acciones">
                                    <p>Imagen</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <img className="icon_publicacion" src="https://img.icons8.com/cute-clipart/64/000000/happy.png"/>
                                <div className="text_acciones">
                                    <p>Reaccion</p>
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

export default ContainerPublic