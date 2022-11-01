import React, { useState } from 'react';
import './trypopup.css'
import Dice from '../DICEFUNCTION/dice';
import sidehead from '../assests/snl-logo.75a58625.png';
import startimg from '../assests/start icons.png'
import Playername from './playername';
let noOfPlayers;
let playerObject;
export default function Example() {

  const [playerState, setState] = useState('')
  const [gameStart, setGameStart] = useState(false)
  const [screen, setScreen] = useState('popupscreen')

  function game() {
    noOfPlayers = Number(playerState)
    // console.log(`this is player state ${playerState}`)
    let object = {}
    for (let i = 1; i <= noOfPlayers; i++) {
      object[`Player${i}`] = 1
    }
  
    playerObject = object
    console.log(playerObject)
    if(noOfPlayers>1 ){
    setScreen('hidden')
    setGameStart(true)
    }
    else{
      alert("Number must be filled out (min 2 player)")
    }
  }
  // console.log(playerState)


  return (
    <>
      <div className={screen}>
        <img id='sideimgsss2' src={sidehead} alt="no img" />
        <div className="statermain">
          <div className="starter">
            <label className='numplayer'>NO OF PLAYERS </label>
          </div>
          <div className="inputbox">
            <input className='nputda' type="number"
              placeholder="enter the number"
              onChange={e => setState(e.target.value)} />
          </div>
          <img id='startimager' src={startimg} onClick={game} alt="" />
        </div>
      </div>
      
      {gameStart ? <Playername /> : null}
    </>
  );
}

export { noOfPlayers, playerObject }