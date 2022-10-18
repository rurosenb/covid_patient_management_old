import React, {useState} from 'react';
import axios from '../apis/axios';
import PatientList from './PatientList';


const CreatePatient = () => {
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [patientTZ, setPatientTZ]=useState("");
    const [street, setStreet]=useState("");
    const [houseNumber, setHouseNumber]=useState("");
    const [apartmentNumber, setApartmentNumber]=useState("");
    const [city, setCity]=useState("");
    const [zip, setZip]=useState("");
    const [DOB, setDOB]=useState("");
    const [mobilePhone, setMobilePhone]=useState("");
    const [phone, setPhone]=useState("");
    const [gender, setGender]=useState("");



    const submitForm=(event)=>{
        event.preventDefault();
        console.log(lastName, firstName)
        axios.post('/patient', {firstName, lastName, patientTZ, street, houseNumber, apartmentNumber, city, zip, DOB, mobilePhone, phone, gender} )
    }
   
  return (
    <div>
        <form onSubmit={(event)=>submitForm(event)}>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' value={firstName} onChange={(val)=>setFirstName(val.target.value)}/><br/>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' value={lastName} onChange={(val)=>setLastName(val.target.value)}/><br/>
            <label htmlFor='patientTZ'>Patient TZ </label>
            <input type='text' id='patientTZ' value={patientTZ} onChange={(val)=>setPatientTZ(val.target.value)} /><br/>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' value={street} onChange={(val)=>setStreet(val.target.value)}  /><br/>
            <label htmlFor='houseNumber'>House Number</label>
            <input type='text' id='houseNumber' value={houseNumber} onChange={(val)=>setHouseNumber(val.target.value)} /><br/>
            <label htmlFor='apartmentNumber'>apartment Number</label>
            <input type='text' id='apartmentNumber' value={apartmentNumber} onChange={(val)=>setApartmentNumber(val.target.value)} /><br/>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' value={city} onChange={(val)=>setCity(val.target.value)} /><br/>
            <label htmlFor='zip'>Zip</label>
            <input type='text' id='zip' value={zip} onChange={(val)=>setZip(val.target.value)} /><br/>
            <label htmlFor='DOB'>DOB</label>
            <input type='date' id='DOB' value={DOB} onChange={(val)=>setDOB(val.target.value)}/><br/>
            <label htmlFor='mobilePhone'>Mobile Phone</label>
            <input type='text' id='mobilePhone' value={mobilePhone} onChange={(val)=>setMobilePhone(val.target.value)}/><br/>
            <label htmlFor='phone'>Phone</label>
            <input type='text' id='phone' value={phone} onChange={(val)=>setPhone(val.target.value)}/><br/>
            <label htmlFor='gender'>Gender</label>
            <input type='text' id='gender' value={gender} onChange={(val)=>setGender(val.target.value)}/><br/>
            <button>Submit</button>

        
        </form>

        {<PatientList/>}
    </div>
  )
}

export default CreatePatient