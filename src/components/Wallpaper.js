import Card from './Card'
import {useContext} from 'react'
import {AppContext} from '../App'

export default function Wallpaper(){
  
  const data = useContext(AppContext);
  
  return(
    <>
      {data.wallpaper.map(obj => {
        return <Card key={obj.id} data={obj}/>
      })}
    </>
  );
}