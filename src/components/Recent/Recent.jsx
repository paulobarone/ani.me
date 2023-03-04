import Card from 'components/Card/Card';
import Button from 'components/Button/Button';
import styles from './Recent.module.scss';

function Recent() {
  return (
    <section className={styles.recentContainer}>
      <h3>Últimas atualizações</h3>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <Button>Ver mais</Button>
    </section>
  );
}

export default Recent;
