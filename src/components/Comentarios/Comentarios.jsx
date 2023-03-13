import styles from './Comentarios.module.scss';
import anaJuliaImg from './ana-julia.png';
import BrunoSanImg from './bruno-san.png';
import Button from 'components/Button/Button';

function Comentarios() {
  return (
    <div className={styles.commentsContainer}>
      <h3 className={styles.commentsTitle}>Comentários</h3>
      <div className={styles.commentsList}>
        <img className={styles.commentsImg} src={anaJuliaImg} alt="Ana Júlia" />
        <div className={styles.commentsTextGroup}>
          <span className={styles.commentsName}>Ana Júlia</span>
          <p className={styles.comment}>Episodio muito top, já voltou muito bom!</p>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.commentsList}>
        <img className={styles.commentsImg} src={BrunoSanImg} alt="Bruno San" />
        <div className={styles.commentsTextGroup}>
          <span className={styles.commentsName}>Bruno San</span>
          <p className={styles.comment}>{`Primeira vez assistindo e já estou adorando :)`}</p>
        </div>
      </div>
      <Button>Ver mais</Button>
    </div>
  )
}

export default Comentarios;