import React, { useState, useEffect, useMemo } from 'react';
import './WorkerList.css'

function WorkerList({ workers,showSelect }) {
  

 

  const handleWorkerClick=(id)=>{
    showSelect(id)
  }

  

  if(workers===undefined)
    {
      return <div>"..Loading"</div>
    }

  return (
    <div>
      <h1>List of Workers</h1>
      <ul>
        {workers.map(worker => (
          <li key={worker.id} onClick={() => handleWorkerClick(worker.id)} className='border'>
            <span>{worker.fullName}</span>
            <div>{worker.departmentName}</div>
            <div>{worker.workerTitle}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkerList;
