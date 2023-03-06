import styles from './Header.module.scss';
import search from './search.svg';
import menuClose from './menuClose.svg';
import menuOpen from './menuOpen.svg';
import { useEffect, useState } from 'react';

function Header() {
  const navItems = ['Início', 'Lista', 'Gêneros', 'Novos episódios'];
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
          {navItems.map((item, key) => {
            return <li key={key}>{item}</li>
          })}
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
