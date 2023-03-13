import { useNavigate } from 'react-router-dom';
import styles from './Card.module.scss';

function Card(props) {
  const navigate = useNavigate();
  function redirectAnime(anime) {
    navigate(`/anime/${anime.path}`, { state: { anime } })
  }

  return (
    <li className={styles.cardContainer} key={props.path}>
      <div 
        onClick={() => redirectAnime(props)}
        className={styles.card} 
        style={{ 
          backgroundImage: `linear-gradient(180deg, rgba(6, 9, 15, 0) 0%, #06090F 100%), url('${props.cape}')` 
        }}>
      <p>Episódio {props.episode}</p>
      </div>
      <p>{props.title}</p>
    </li>
  );
}

export default Card;