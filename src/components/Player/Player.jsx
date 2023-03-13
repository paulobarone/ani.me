import styles from './Player.module.scss';
import playerButton from './player-button.svg'
import MyContext from 'contexts/MyContext';
import { useContext } from 'react';
import filteredDataPath from 'utils/filteredDataPath';


function Player() {
  const { data, isFetching } = useContext(MyContext);
  const anime = !isFetching && filteredDataPath(data, window.location.pathname.substring(1));

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