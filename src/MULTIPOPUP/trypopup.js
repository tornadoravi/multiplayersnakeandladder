import React, { useState } from 'react';
import './trypopup.css'
import Dice from '../DICEFUNCTION/dice';
import sidehead from '../assests/snl-logo.75a58625.png';
import startimg from '../assests/Game_Start_Button_PNG_Picture__Start_Game_Button_Icon_Cartoon__Game_Icons__Button_Icons__Start_Icons_PNG_Image_For_Free_Download__2_-removebg-preview.png'
let noOfPlayers;
let playerObject;
export default function Example() {

  const [playerState, setState] = useState('')
  const [gameStart, setGameStart] = useState(false)
  const [screen, setScreen] = useState('popupscreen')

  function game() {
    noOfPlayers = Number(playerState)
    console.log(`this is player state ${playerState}`)
    let object = {}
    for (let i = 1; i <= noOfPlayers; i++) {
      object[`Player${i}`] = 1
    }
    playerObject = object
    console.log(playerObject)
    setScreen('hidden')
    setGameStart(true)
  }

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
              placeholder="123456790"
              onChange={e => setState(e.target.value)} />
          </div>
          <img id='startimager' src={startimg} onClick={game} alt="" />
        </div>
      </div>
      {gameStart ? <Dice /> : null}
    </>
  );
}

export { noOfPlayers, playerObject }