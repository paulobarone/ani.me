import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

function Card(props) {
  return (
    <Link className={styles.cardLink} to={props.path}>
      <li className={styles.cardContainer}>
        <div 
          className={styles.card} 
          style={{ 
            backgroundImage: `linear-gradient(180deg, rgba(6, 9, 15, 0) 0%, #06090F 100%), url('${props.cape}')` 
          }}>
        <p>Episódio {props.episode}</p>
        </div>
        <p>{props.title}</p>
      </li>
    </Link>
  );
}

export default Card;