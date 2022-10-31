import React, { useState } from 'react'
// import { noOfPlayers, object } from '../PLAYERS/players';
import { noOfPlayers, playerObject } from '../MULTIPOPUP/trypopup';
import boxArr from '../BOARDCELLARRAY/boardarray'
import PlayersFunction from '../PROPSFUNCTION/props'
import sidehead from '../assests/snl-logo.75a58625.png'
import buttonimg from '../assests/kisspng-clip-art-product-design-line-logo-play-button-gamegiri-clipart-full-size-clipart-5cf46c5e0eeb21.3126139415595223980611.png'
import './dice.css'

let count = 1
export default function Dice() {
  const [player, setPlayer] = useState(playerObject)
  const [playersturn, setplayerturn] = useState('START')
  const [diceNum, setdiceNum] = useState(0)
  const [playercurrentpossion, setplatercurrentpossion] = useState()
  const [winners, setwinner] = useState()

  function dice() {
    let randomNum = Math.floor(Math.random() * 6) + 1
    
    if (player[`Player${count}`] + randomNum <= boxArr.length) {
      setdiceNum(`DICE ~ ${randomNum}`)
      boxArr.forEach(element => {
        element.players[`Player${count}`] = ''
      });

      boxArr.forEach(element => {
        if (element.cellNUM === player[`Player${count}`] + randomNum) {
          if (element.to !== '') {
            boxArr.forEach(cell => {
              if (element.to === cell.cellNUM) {

                let indexvalue = boxArr.indexOf(cell)
                boxArr[indexvalue].players[`Player${count}`] = 'in'

                setPlayer({ ...player, [`Player${count}`]: cell.cellNUM })
                setplayerturn([`Player${count}turn`])
                setplatercurrentpossion(`Player ${count} position ${element.cellNUM}`)
              }
            })
            setplatercurrentpossion(element.to)
          }
          else {
            element.players[`Player${count}`] = 'in'
            setPlayer({ ...player, [`Player${count}`]: element.cellNUM })
            setplayerturn([`Player${count}turn`])
            setplatercurrentpossion(`Player ${count} position ${element.cellNUM}`)

          }
        }
      }
      );
      if (randomNum === 1 || randomNum === 5 || randomNum === 6) {
        count = count
      }
      else {
        count++
      }
      if (count === noOfPlayers + 1) {
        count = 1
      }
      if (player[`Player${count}`] === 100){
        setwinner(`winner  Player${count}`)
  
      } 
    }
   

  }
  return (
    <div className="background">
   
    <div className='mainpage'>
      <div className="sidenav">
        <img  id='sideimgsss' src={sidehead} alt="no img" />
      <div className="dicecontrol">
      <h1>{playersturn}</h1>
      <h1 className='diceNUMS'>{diceNum}</h1>
      {/* <button >Dice</button> */}
      <img id='buttonid' onClick={dice} src={buttonimg} alt="loadingimg" />
      </div>
      <div className='playerpositons'>
      <h1>{playercurrentpossion}</h1>
      <h1>{winners}</h1>
      </div>
      </div>
      <div className="board">
        {
          boxArr.map(ele => <PlayersFunction key={ele.from} id={ele.id} players={ele.players} className={ele.className} cellNUM={ele.cellNUM} splCel={ele.icon} />)

        }
      </div>
    </div>
    </div>
  )
}
