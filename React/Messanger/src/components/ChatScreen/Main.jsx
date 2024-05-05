import React, { useState, useEffect, useMemo } from 'react';
import WorkerDropdown from './WorkerDropdown'
import WorkerDetails from './WorkerDetails'
import axios from 'axios';

import  './Main.css'

function Main({workers,workerId,fetchOldMessages}) {

  const [inputValue, setInputValue] = useState('');
  const [workerInfo, setWorkerInfo] = useState({});

  useEffect(() => {
    fetchData();
  }, [workerId]);


  const fetchData =  () => {
    try {
      axios.get('http://localhost:50305/Messanger/getWorkerDetailsById/' + workerId).then(response =>{
        setWorkerInfo(response.data[0]);
      });
      
    } catch (error) {
      console.error('Error fetching workers:', error);
    }
  };


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
      <h1>Main</h1>
      <WorkerDetails worker={workerInfo}/>
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