import {Link} from 'react-router-dom'
import './Card.css'

function Card({imgSrc, info}) {
    return (
        <div className='card'>
            <div className="card__img">
                <img src={imgSrc} alt="img"/>
            </div>
            <div className="card__info">
                <h2>{info.title}</h2>
                <p>{info.text}</p>
                <Link to='/'><button className="card__btn">{info.btnText}</button></Link>
            </div>
        </div>
    )
}

export default Card