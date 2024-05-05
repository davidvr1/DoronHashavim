import React, { useState, useEffect, useMemo } from 'react';
import WorkerDropdown from './WorkerDropdown'
import axios from 'axios';

import  './Main.css'

function Main({workers,workerId,fetchOldMessages}) {

  const [inputValue, setInputValue] = useState('');

  const addMessage=()=>{
    const data = {
      msg: inputValue,
      Id: workerId, // Replace with your actual worker ID
    };

    axios.post('http://localhost:50305/Action', data)
      .then(response => {
        // Handle successful response
        console.log('Message posted successfully');
        setInputValue('')
        fetchOldMessages()
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the request:', error);
      });
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


    return (
    <>
      <div>Main</div>
      <WorkerDropdown workers={workers} selectedWorkerId={workerId}/>
      

      <textarea 
        rows="16" 
        cols="50"
        id={"chatText"} 
        value={inputValue}   
        onChange={handleChange}
        placeholder='Enter message'
      />

      <button className='button' onClick={addMessage}>Send Message</button>
    </>
      
  )
}

export default Main