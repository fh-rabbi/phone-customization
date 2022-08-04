import {Link,useLocation} from 'react-router-dom'
import styles from './css/navbar.module.css'

export default function NavBar(){
  const pathname = useLocation().pathname;
  return(
    <>
      <nav class={styles.nav}>
        <li><Link className={pathname === '/' ? styles.active : styles.defaultLink } to="/">Home</Link></li>
        <li><Link className={pathname === '/wallpaper' ? styles.active : styles.defaultLink} to="/wallpaper">Wallpaper</Link></li>
        <li><Link className={pathname === '/widget' ? styles.active : styles.defaultLink} to="/widget">Widget</Link></li>
        <li><Link className={pathname === '/icon' ? styles.active : styles.defaultLink} to="/icon">Icon Pack</Link></li>
      </nav>      
    </>
  );
}