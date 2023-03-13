import styles from './Header.module.scss';
import search from './search.svg';
import menuClose from './menuClose.svg';
import menuOpen from './menuOpen.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header()  {
  const [menuActive, setMode] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navBarItems = ['Início', 'Lista', 'Gêneros', 'Novos episódios'];

  const handleToggleSearch = () => {
    setShowSearchInput(prevState => !prevState);
  }

  const toggleMenuMode = () => {
    setMode(!menuActive);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    document.body.style.overflowY = menuActive ? 'hidden' : 'auto';
  }, [menuActive]);

  return (
    <header className={styles.header}>
      <div className={styles.topDiv}>
        <Link to='/'><h1 className={styles.logo}>Ani.me</h1></Link>
        <div className={menuActive ? styles.listContainerActive : styles.listContainer}>
          <ul className={menuActive ? styles.listActive : styles.list}>
            {navBarItems.map((item, key) => {
              return (
                <Link key={key} to="/" onClick={toggleMenuMode}>
                  <li>{item}</li>
                </Link>
              )
            })}
          </ul>
        </div>
        <div className={styles.buttonContainer}>
          <img 
            src={search}
            alt="Botão de pesquisa"
            onClick={handleToggleSearch}
          />
          <img 
            src={menuActive ? menuClose : menuOpen}
            className={styles.menu}
            alt="Menu"
            onClick={toggleMenuMode}
          />
        </div>
      </div>
      { showSearchInput &&
        <div className={styles.inputContainerMobile}>
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Buscar"
            autoFocus
          />
        </div>
      }
    </header>
  );
}

export default Header;
