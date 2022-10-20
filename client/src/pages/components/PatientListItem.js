import React from 'react'
import axios from '../../apis/axios'
import { useNavigate, Link  } from 'react-router-dom';


const PatientListItem = ({item, callback}) => {
  const navigate=useNavigate ();

    
    const deletePatient=async(item)=>{
      await  axios.delete('/patient',{
            headers:{"Content-Type": "application/json"},
            data:{id: item._id}
        });
       await callback();
        
    }
    const editPatient=(item)=>{
      navigate('/createpatient', {state: item});
    }

  return (
  <table class="table">

  <tbody>
  <tr key={item._id}>
  <th scope="row"></th>
    <Link to={`/viewpatient/${item._id}`}>
    <td>{item.firstName} {item.lastName}</td>
    </Link>
    <td><button onClick={()=>editPatient(item)}>Edit Patient</button></td>
   
     <td><button onClick={()=>deletePatient(item)}>Delete</button></td>
     </tr>
     </tbody>
     </table>
  )
}

export default PatientListItem