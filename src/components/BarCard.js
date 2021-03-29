import CardUser from './CardUser'
import img_icon_card from '../assets/img_card_1.jpg'

const BarCard = () => {
    const estados = [
        {
            nombre: 'Pedro',
            img_estado: img_icon_card,
            img_user: 'https://img.icons8.com/fluent/48/000000/person-male.png'
        },
        {
            nombre: 'Roberto',
            img_estado: 'https://i.imgur.com/EdhFIeB.png',
            img_user: 'https://img.icons8.com/fluent/48/000000/person-male.png'
        },
        {
            nombre: 'Scorpio',
            img_estado: 'https://i.imgur.com/TOJaoTG.jpeg',
            img_user: 'https://img.icons8.com/fluent/48/000000/person-male.png'
        },
        {
            nombre: 'Kaisel',
            img_estado: 'https://somoslibros.net/wp-content/uploads/2016/01/Luna-de-pluton-300x461.jpg',
            img_user: 'https://img.icons8.com/fluent/48/000000/person-male.png'
        },
        {
            nombre: 'Sergio',
            img_estado: 'https://i.imgur.com/Vb3WSh7.jpeg',
            img_user: 'https://img.icons8.com/fluent/48/000000/person-male.png'
        },
        {
            nombre: 'Paul',
            img_estado: 'https://i.imgur.com/aLsm5Xf.jpg',
            img_user: 'https://img.icons8.com/fluent/48/000000/person-male.png'
        },
        {
            nombre: 'Diego',
            img_estado: 'https://i.imgur.com/7IbcP6D.jpg',
            img_user: 'https://img.icons8.com/fluent/48/000000/person-male.png'
        },
        {
            nombre: 'Chino',
            img_estado: 'https://i.imgur.com/X9nTpkd.png',
            img_user: 'https://img.icons8.com/fluent/48/000000/person-male.png'
        }
      ]
    return(
        <div className="container-fluid">
            <div className="row_cards">
                <CardUser estado={estados[0]}/>
                <CardUser estado={estados[1]}/>
                <CardUser estado={estados[2]}/>
                <CardUser estado={estados[3]}/>
                <CardUser estado={estados[4]}/>
                <CardUser estado={estados[5]}/>
                <CardUser estado={estados[6]}/>
                <CardUser estado={estados[7]}/>

            </div>
        </div>
    )
}

export default BarCard