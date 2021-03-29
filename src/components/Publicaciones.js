import PublicUser from './PublicacionUser'

const Publicaciones = () =>{
    const publicaciones = [
        {
            nombre: 'Kevin01YT',
            publicacion_text: 'Esta es una publicaion de ejemplo, no tiene nada que ver con otros componentes',
            img_user: 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/12/16/pewdiepie.png',
            img_publicacion: 'https://www.trecebits.com/wp-content/uploads/2020/12/papel-higienico.jpg',
            likes: 145,
            comentarios: 56,
            compartir: 165
        },
        {
            nombre: 'PrimalCar',
            publicacion_text: 'Esta es una publicaion de ejemplo, no tiene nada que ver con otros componentes',
            img_user: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg',
            img_publicacion: 'https://i.imgur.com/U5fF0Ne.png',
            likes: 450,
            comentarios: 26,
            compartir: 127
        },
        {
            nombre: 'Benjamin',
            publicacion_text: 'Esta es una publicaion de ejemplo, no tiene nada que ver con otros componentes',
            img_user: 'https://cdn.myanimelist.net/images/characters/12/437304.jpg',
            img_publicacion: 'https://i.imgur.com/oLzvVDD.jpeg',
            likes: 700,
            comentarios: 15,
            compartir: 153
        },
    ]
    return(
        <div className="Container-fluid">
            <PublicUser publicacion={publicaciones[0]}/>
            <PublicUser publicacion={publicaciones[1]}/>
            <PublicUser publicacion={publicaciones[2]}/>
        </div>
    )
}

export default Publicaciones