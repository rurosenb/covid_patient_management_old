import React from 'react'
import axios from '../../apis/axios'


const PatientListItem = ({item, callback}) => {

    
    const deletePatient=async(item)=>{
        axios.delete('/patient',{
            headers:{"Content-Type": "application/json"},
            data:{id: item._id}
        });
       await callback();
        
    }

  return (
    <div key={item._id}>{item.lastName} {item.firstName} <button onClick={()=>deletePatient(item)}>Delete</button></div>
  )
}

export default PatientListItem