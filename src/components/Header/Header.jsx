import styles from './Header.module.scss';
import search from './search.svg';
import menuClose from './menuClose.svg';
import menuOpen from './menuOpen.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header()  {
  const [active, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!active);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    document.body.style.overflowY = active ? 'hidden' : 'auto';
  }, [active]);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Ani.me</h1>
      <div className={active ? styles.listContainerActive : styles.listContainer}>
        <ul className={active ? styles.listActive : styles.list}>
          <Link to="/"><li>Início</li></Link>
          <Link to="/"><li>Lista</li></Link>
          <Link to="/"><li>Gêneros</li></Link>
          <Link to="/"><li>Novos episódios</li></Link>
        </ul>
      </div>
      <input placeholder="Buscar" />
      <div className={styles.buttonContainer}>
        <img src={search} alt="Botão de pesquisa" />
        <link></link><img src={active ? menuClose : menuOpen} alt="Menu" className={styles.menu} onClick={toggleMode}/>
      </div>
    </header>
  );
}

export default Header;
