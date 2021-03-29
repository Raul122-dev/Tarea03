const CardUser = (props) => {
    return(
        <div className="card cartita_estados">
            <div className="card_estado">
                <img className="imagen-estado" src={props.estado.img_estado}  />
            </div>
            <div className="card-body">
                <img className="img_icon_card" src={props.estado.img_user}/>
                <p className="card-text">{props.estado.nombre}</p>
            </div>
        </div>
    )
}

export default CardUser