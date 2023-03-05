import useFetch from 'hooks/useFetch';
import Card from 'components/Card/Card';
import Button from 'components/Button/Button';
import styles from './Update.module.scss';

// Update: https://gist.githubusercontent.com/paulobarone/8d49ec0d0e62b5b143b0c5f4c1b022ae/raw/4b09f0b78d758b21a609a14a8539a1de0ad50715/animeUpdateDB.json
// Recent: https://gist.githubusercontent.com/paulobarone/d6211e14b6192c565d02b7fad0fc8b73/raw/939ddba41014376261deff473fff8859b750423b/animeRecentDB.json
// Top: https://gist.githubusercontent.com/paulobarone/44c440a46c0cf3db3104c1759abc4e5d/raw/0a048f00fd0194b35707eb2bc97f0998c7cb4d90/animeTopDB.json
// Related: https://gist.githubusercontent.com/paulobarone/a9450dda77b93d545d275c62f073d4a0/raw/4e176487078dae7873a8d6d863f32e4c5ff35024/animeRelatedDB.json

function Update() {
  const { data: update, isFetching } = useFetch('https://gist.githubusercontent.com/paulobarone/8d49ec0d0e62b5b143b0c5f4c1b022ae/raw/35b184890c5a71b11556d9e905efe958de30df07/animeUpdateDB.json');

  return (
    <section className={styles.updateContainer}>
      <h3>Últimas atualizações</h3>
      <ul>
        { isFetching && <p>Carregando...</p> }
        { !isFetching && update["update"].map((item) => {
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
