import styles from './Banner.module.scss';

function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.textGroup}>
        <h2>Últimas novidades</h2>
        <p>O que você vai assistir hoje?</p>
      </div>
      <div className={styles.banner}>
        <div className={styles.bannerTextGroup}>
          <h3>ONE PUNCH MAN TERÁ 3ª TEMPORADA</h3>
          <p>Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch Man <span className={styles.hide}>, divulgou um comunicado confirmando a produção de uma terceira temporada da adaptação para o anime […]</span></p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
