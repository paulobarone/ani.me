import Card from 'components/Card/Card';
import Button from 'components/Button/Button';
import styles from './Update.module.scss';
import MyContext from 'contexts/MyContext';
import filteredDataType from 'utils/filteredDataType';
import { useContext } from 'react';

function Update() {
  const { data, isFetching } = useContext(MyContext);
  const dataFiltered = !isFetching && filteredDataType(data, 'update');

  return (
    <section className={styles.updateContainer}>
      <h3>Últimas atualizações</h3>
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
      <Button>Ver mais</Button>
    </section>
  );
}

export default Update;
