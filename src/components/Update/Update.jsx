import useFetch from 'hooks/useFetch';
import Card from 'components/Card/Card';
import Button from 'components/Button/Button';
import styles from './Update.module.scss';

function Update() {
  const { data: update, isFetching } = useFetch('8d49ec0d0e62b5b143b0c5f4c1b022ae/raw/b9c2141df2f0d78f687d17433060c7ff36cd52b6/animeUpdateDB.json');

  return (
    <section className={styles.updateContainer}>
      <h3>Últimas atualizações</h3>
      <ul>
        { isFetching && <p>Carregando...</p> }
        { !isFetching && update.map((item) => {
          return <Card 
            key={item.id}
            title={item.title}
            cape={item.cape}
            episode={item.episode}
          />
        }) }
      </ul>
      <Button>Ver mais</Button>
    </section>
  );
}

export default Update;
