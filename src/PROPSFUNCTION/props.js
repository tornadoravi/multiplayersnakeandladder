import React from 'react'
import Prop2 from './prop2'
import './props.css'
import { playerObject } from '../MULTIPOPUP/playername'
const PlayersFunction = ({ id, className, cellNUM,players,splCel}) => {
  let playersCoins = players
  let arr=[]
  for(let i in playersCoins){
    if(playersCoins[i]==='in'){
      arr.push(playerObject[i])
    }
  }
  return (
    <div className='props'>
     
      <div id={id} className={className}>
        <h3 className='numtitle'>{cellNUM}</h3>
        <p className='splcelicons'>{splCel}</p>
      </div>
      <div className='iconss'>
      {arr.map(n=><Prop2 player={n} key={n}/>)}
      </div>
    </div>
  )
}
export default PlayersFunction