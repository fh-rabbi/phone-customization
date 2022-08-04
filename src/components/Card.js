import styles from './css/card.module.css'

export default function Card(props){
  const {type,name} = props.data;
  return(
    <div class={styles.card}>
      <h3>{name}</h3>
      <p>{type}</p>
    </div>    
  )
}