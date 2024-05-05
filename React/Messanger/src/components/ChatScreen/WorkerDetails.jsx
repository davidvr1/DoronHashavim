import React from 'react'

function WorkerDetails({worker}) {
  return (<>
    <h2>WorkerDetails</h2>
    <div>{worker.fullName}</div>
    <div>{worker.departmentName}</div>
    <div>{worker.workerTitle}</div>
    <div>{worker.phone}</div>
    <div>{worker.address}</div>
    <div>{worker.gender}</div>   
  </>
    
  )
}

export default WorkerDetails