import React from 'react'
import './OldMessages.css'

function OldMessages({oldmessages}) {

  
  if(oldmessages==undefined || oldmessages.length===0)
    {
      return <>No Messages</>
    }

  return (<>
    <h1>OldMessages</h1>
    <ul className='border'>
      {oldmessages.map((msg,index)=> (
          <li key={index}>
            {msg}
          </li>
      ))}
    </ul>

    
  </>
  
  )
}

export default OldMessages