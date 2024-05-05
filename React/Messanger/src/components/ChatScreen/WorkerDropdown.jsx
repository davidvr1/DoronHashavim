import React from 'react';

function WorkerDropdown({ workers,selectedWorkerId }) {

   
  return (
    <div>
      <h2>Select Worker:</h2>
      <select>
        {workers.map(worker => (
          worker.id!== selectedWorkerId?
            <option key={worker.id} value={worker.id}>
              {worker.fullName}
            </option>:""          
        ))}
      </select>
    </div>
  );
}

export default WorkerDropdown;