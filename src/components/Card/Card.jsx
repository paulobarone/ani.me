import styles from './Card.module.scss';

function Card(props) {
  return (
    <li key={props.key} className={styles.cardContainer}>
      <div className={styles.card} style={{ backgroundImage: `linear-gradient(180deg, rgba(6, 9, 15, 0) 0%, #06090F 100%), url('${props.cape}')` }}><p>Episódio {props.episode}</p></div>
      <p>{props.title}</p>
    </li>
  );
}

export default Card;