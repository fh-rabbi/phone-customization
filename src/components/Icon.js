import Card from './Card'
import {useContext} from 'react'
import {AppContext} from '../App'

export default function Icon(){
  
  const data = useContext(AppContext);
  
  return(
    <>
      {data.icon.map(obj => {
        return <Card key={obj.id} data={obj}/>
      })}
    </>
  );
}