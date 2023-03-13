import Card from 'components/Card/Card';
import styles from './Recent.module.scss';
import { useContext } from 'react';
import MyContext from 'contexts/MyContext';
import filteredData from 'utils/filteredDataType';

function Recent() {
  const { data, isFetching } = useContext(MyContext);
  const dataFiltered = !isFetching && filteredData(data, 'recent');

  return (
    <section className={styles.recentContainer}>
      <h3>Animes recentes</h3>
      <ul>
        { isFetching && <p>Carregando...</p> }
        { !isFetching && dataFiltered.map((card) => {
          return <Card 
            title={card.title}
            cape={card.cape}
            episode={card.episode}
            path={card.path}
            key={card.path}
          />
        }) }
      </ul>
    </section>
  )
}

export default Recent;