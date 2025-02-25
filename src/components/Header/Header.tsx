import { NavLink } from 'react-router';
import styles from './Header.module.scss';

export const Header = () => (
  <div>
    <header className={styles.header}>STAR WARS SHEET</header>

    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/'>
            Peoples
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/favorites'>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);
