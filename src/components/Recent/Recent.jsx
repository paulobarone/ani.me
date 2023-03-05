import useFetch from 'hooks/useFetch';
import Card from 'components/Card/Card';
import styles from './Recent.module.scss';

function Recent() {
  const { data: recent, isFetching } = useFetch('d6211e14b6192c565d02b7fad0fc8b73/raw/84c7aad892d3c831a774b206b48819c749a506c8/animeRecentDB.json')

  return (
    <section className={styles.recentContainer}>
      <h3>Animes recentes</h3>
      <ul>
        { isFetching && <p>Carregando...</p> }
        { !isFetching && recent.map((item) => {
          return <Card 
            key={item.id}
            title={item.title}
            cape={item.cape}
            episode={item.episode}
          />
        }) }
      </ul>
    </section>
  )
}

export default Recent;