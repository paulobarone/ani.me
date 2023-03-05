import styles from './Header.module.scss';
import menu from './menu.svg';
import search from './search.svg';

function Header() {
  const navItems = ['Início', 'Lista', 'Gêneros', 'Novos episódios'];
  
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Ani.me</h1>
      <ul>
        {navItems.map((item, key) => {
          return <li key={key}>{item}</li>
        })}
      </ul>
      <input placeholder="Buscar" />
      <div className={styles.buttonContainer}>
        <img src={search} alt="Botão de pesquisa" className="search" />
        <img src={menu} alt="Menu" className="menu" />
      </div>
    </header>
  );
}

export default Header;
