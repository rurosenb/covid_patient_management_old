import React, {useEffect, useState} from 'react';
import axios from '../apis/axios';
import AppNavBar from './components/AppNavBar';
import PatientListItem from './components/PatientListItem';

function PatientList() {
  const [patientList, setPatientList]=useState([]);
    
    
    const getPatients=async()=>{
        const results=await axios.get('/patient');
        console.log(results.data.length, patientList.length)
        if(results.data.length!==patientList.length){
            setPatientList(results.data);
        }
       
     
    }

    

    useEffect(()=>{
        const getPatients=async()=>{
            const results=await axios.get('/patient');
            console.log(results.data.length, patientList.length)
            if(results.data.length!==patientList.length){
                setPatientList(results.data);
            }
                  
        }
       
       getPatients();

    },[patientList]);

  return (
    <div>
        <AppNavBar/>
        {patientList.map((patient)=>{
            return (<div>
                <table>
               <PatientListItem item={patient} callback={getPatients}/> 
               </table>
            </div>);
        } )}
    </div>
  )
}

export default PatientList