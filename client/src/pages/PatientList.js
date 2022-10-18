import React, {useEffect, useState} from 'react';
import axios from '../apis/axios';
import PatientListItem from './components/PatientListItem';

function PatientList() {
    const [patientList, setPatientList]=useState([])
    const getPatients=async()=>{
        const results=await axios.get('/patient');
        setPatientList(results.data);
        //console.log(results);
    }

    useEffect(()=>{
       
        getPatients();
    },[]);

  return (
    <div>
        {patientList.map((patient)=>{
            return (<div>
               <PatientListItem item={patient} callback={getPatients}/> 
            </div>);
        } )}
    </div>
  )
}

export default PatientList