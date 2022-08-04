import styles from './css/footer.module.css'
import {Link} from 'react-router-dom'

export default function Footer(){
  return(
    <>
      <footer class={styles.footer}>
        <h4>Created by <Link class="" to="https://cutt.ly/rabbi">fazle rabbi</Link></h4>
        <p>&copy;2022 Phone-Customization</p>
      </footer>    
    </>
  );
}