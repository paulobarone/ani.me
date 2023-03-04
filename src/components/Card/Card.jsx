import styles from './Card.module.scss';

function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}><p>Episódio 24</p></div>
      <p>Nanatsu no Taizai</p>
    </div>
  );
}

export default Card;
