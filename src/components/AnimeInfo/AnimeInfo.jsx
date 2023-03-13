import { useContext } from 'react';
import styles from './AnimeInfo.module.scss';
import MyContext from 'contexts/MyContext';
import filteredDataPath from 'utils/filteredDataPath';

function AnimeInfo() {
  const { data, isFetching } = useContext(MyContext);
  const anime = !isFetching && filteredDataPath(data, window.location.pathname.substring(1));

  return (
    <div className={styles.animeInfoContainer}>
      <img src={anime.cape} alt={anime.title} className={styles.animeCape}/>
      <div className={styles.animeInfos}>
        <p className={styles.animeInfoName}>Duração: &nbsp; <span className={styles.animeInfo}>24min</span></p>
        <p className={styles.animeInfoName}>Estúdio: &nbsp; <span className={styles.animeInfo}>{anime.studio}</span></p>
        <p className={styles.animeInfoName && styles.animeGenreList}>Gênero: &nbsp; {!isFetching && anime.genre.map((item, key) => {
          return (
            <span key={key} className={styles.animeInfo && styles.animeGenreItems}>{item}</span>
          )
        })}</p>
        <p className={styles.animeInfoName}>Sinopse: <br /> <span className={styles.animeInfo}>{anime.synopsis}</span></p>
      </div>
    </div>
  )
}

export default AnimeInfo