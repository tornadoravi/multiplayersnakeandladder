import React from 'react'
import { useState } from 'react'
import Dice from '../DICEFUNCTION/dice'
import { noOfPlayers } from '../MULTIPOPUP/trypopup'
import sidehead from '../assests/snl-logo.75a58625.png';
import startimg from '../assests/nexticon s.png'
import './playername.css'

let count = 1
let playernames = []
let playerObject = {}
export default function Playername() {
    const [name, setname] = useState('')
    const [next, setnext] = useState(false)
    const [screenname2, setscreenname2] = useState('namescreen2')





    function playerlist() {
        playernames.push(name)
        setname('')
        // console.log(playernames)
        count++
        if (count > noOfPlayers) {
            if (name === "" || name === null) {
                alert("Name must be filled out");
                // setnext(false)
            }
            else {
                setnext(true)
                setscreenname2("hiddenscreen2")
                for (let i = 1; i <= noOfPlayers; i++) {
                    playerObject[`Player${i}`] = playernames[i - 1]
                }
            }
        }

    }
    return (
        <>
            <div className={screenname2}>
                <img id='sideimgsss2' src={sidehead} alt="no img" />
                <div className="statermain">
                    <div className="starter">
                        <label className='nameplayer'>player name</label>
                    </div>
                    <div className="inputbox">
                        <input className='nputda' type="text"
                            placeholder='enter the name'
                            value={name}
                            onChange={e => setname(e.target.value)} />
                    </div>
                    <img id='startimager' src={startimg} onsubmit="return validateForm()" onClick={playerlist} alt="" />
                </div>
            </div>
            {next ? <Dice /> : null}
        </>
    )
}

export { playerObject, playernames }
