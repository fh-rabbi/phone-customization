import Card from './Card'
import {useContext} from 'react'
import {AppContext} from '../App'

export default function Widget(){
  
  const data = useContext(AppContext);
  
  return(
    <>
      {data.widget.map(obj => {
        return <Card key={obj.id} data={obj}/>
      })}
    </>
  );
}