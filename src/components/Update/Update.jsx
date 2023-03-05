import Card from 'components/Card/Card';
import Button from 'components/Button/Button';
import styles from './Update.module.scss';

function Update() {
  return (
    <section className={styles.updateContainer}>
      <h3>Últimas atualizações</h3>
      <ul>
        {}
      </ul>
      <Button>Ver mais</Button>
    </section>
  );
}

export default Update;
