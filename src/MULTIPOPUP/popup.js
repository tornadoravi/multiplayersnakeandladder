import React, { useState } from 'react'

export default function POPupPlayer() {
    const[name,setname]=useState("")
    const[playernameList,setplayerList]=useState("")

    const InputHandle=(e)=>{
        setname(e.target.value)
    }
    
    const changer=()=>{
        let arr=[]
        for (let index = 1; index <= name; index++) {
          arr.push(index)
        }
        return arr
    }


    const PLAYERInputHandle=(eL)=>{
        setplayerList(eL.target.value)
    }

  return (
    <div>no of player
    <input type="text" value={name} onChange={InputHandle} />
    <button type='submit' onClick={changer}>SUBMIT</button>

    <div>
        {changer().map((element ,key)=>{
           return( <div>
                <label key={key}>Plater{element}</label>
                <input type="text" onChange={PLAYERInputHandle}/>
            </div>)
            
        })}
        
    </div>
    </div>
  )
}
