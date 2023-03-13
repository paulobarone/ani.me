import styles from './Player.module.scss';
import playerButton from './player-button.svg'
import { useLocation } from 'react-router-dom';

function Player() {
  const { state } = useLocation();
  const { anime } = state;

  return (
    <div className={styles.playerContainer}>
      <h4 className={styles.playerTitle}>{anime.title} - Episódio {anime.episode}</h4>
      <div className={styles.playerBackground}>
        <img src={playerButton} alt="Botão Player" className={styles.playerButton} />
      </div>
    </div>
  )
}

export default Player;