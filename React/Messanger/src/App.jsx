import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import WorkerList from './components/workerList/workersList'
import Main from './components/ChatScreen/Main'
import OldMessages from './components/chatMessages/OldMessages'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [selectedWorkerId,setSelectedWorkerId]=useState(-1)
  const [workers, setWorkers] = useState([]);
  const [oldmessages,setOldMessages]=useState([])

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchOldMessages();
  }, [selectedWorkerId]);

  const showSelect=(workerId)=>{
    setSelectedWorkerId(workerId)
  }

  const fetchOldMessages =  () => {
    if(selectedWorkerId!==-1){
      try {
        axios.get('http://localhost:50305/Action?workerId=' + selectedWorkerId)
        .then(response =>{
          setOldMessages(response.data);
        })
        .catch(error =>{
          setOldMessages(()=>{ return []})
       });
        
      } catch (error) {
        setOldMessages(()=>{ return []})
        console.error('Error fetching workers:', error);
      }
    }
    
  };

  const fetchData =  () => {
    try {
      axios.get('http://localhost:50305/Messanger').then(response =>{
        setWorkers(response.data);
      });
      
    } catch (error) {
      console.error('Error fetching workers:', error);
    }
  };


  return (
    <>
    <div className="container">
      <div className="column">
        <WorkerList workers={workers} showSelect={showSelect} />
      </div>
      <div className="column">
        {selectedWorkerId > -1 && <Main workers={workers} 
                                    workerId={selectedWorkerId}
                                    fetchOldMessages={fetchOldMessages}
                                  />}
      </div>
      <div className="column">
      {selectedWorkerId > -1 && <OldMessages  oldmessages={oldmessages}/>}
      </div>
    </div>
    
      
      
    </>
  )
}

export default App
