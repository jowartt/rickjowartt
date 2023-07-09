import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card ({id, name, status, species, gender, origin, image, onClose }) {
  return (
   <div className={style.contenedor}>
      <button onClick={() => onClose(id)} className={style.closebutton}>X</button>

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link> 

      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{status}</h2>
      <h2>{origin}</h2>
      <img src={image} alt='' /> 
  </div>
  
  )
}
