import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards({characters}) {
  return (
     <div className={style.cardsconteiner}>
      {
        characters.map(({id, name, status, species, gender, origin, image})=> { 
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name}
              onClose={() => alert('Emulamos que se cierra')}
            />
          )
        })
      }

     </div>
  )
}
