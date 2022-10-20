import React, {useState, useEffect} from 'react';
import axios from '../apis/axios';
import AppNavBar from './components/AppNavBar';
import PatientList from './PatientList';
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/index.css";
import moment from 'moment';




const CreatePatient = () => {
  let {state} = useLocation();
  const navigate=useNavigate();
  let isEdit=false;
  
    if(state){
      isEdit=true
      console.log('EDITING', state)
    }
    else{
      state={}
      console.log("New Patient")
    }
  
    const [firstName, setFirstName]=useState(state.firstName);
    const [lastName, setLastName]=useState(state.lastName);
    const [patientTZ, setPatientTZ]=useState(state.patientTZ);
    const [street, setStreet]=useState(state.street);
    const [houseNumber, setHouseNumber]=useState(state.houseNumber);
    const [apartmentNumber, setApartmentNumber]=useState(state.apartmentNumber);
    const [city, setCity]=useState(state.city);
    const [zip, setZip]=useState(state.zip);
    const [DOB, setDOB]=useState(moment(new Date(state.DOB)).format("YYYY-MM-DD"));
    const [mobilePhone, setMobilePhone]=useState(state.mobilePhone);
    const [phone, setPhone]=useState(state.phone);
    const [gender, setGender]=useState(state.gender);
    const [patientList, setPatientList]=useState([]);

    const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

    const getPatients=async()=>{
      const results=await axios.get('/patient');
      console.log(results.data.length, patientList.length)
   //  if(results.data.length!==patientList.length){
    if(equals(results.data, patientList)){
          setPatientList(results.data);
      }
            
  }

    useEffect(()=>{
    
     
     getPatients();

  },[patientList]);


    const submitForm=async(event)=>{
      console.log("FORM SUBMITED");
        event.preventDefault();
        console.log(lastName, firstName)
        if(isEdit){
          await axios.patch('/patient', {id: state._id, firstName, lastName, patientTZ, street, houseNumber, apartmentNumber, city, zip, DOB, mobilePhone, phone, gender} )
        }
        else{
          await axios.post('/patient', {firstName, lastName, patientTZ, street, houseNumber, apartmentNumber, city, zip, DOB, mobilePhone, phone, gender} )
        }
       
       //getPatients();
       if(isEdit){
        alert(`Patient  ${firstName} ${lastName} was updated!`);
       }
       else{
        alert(`Patient  ${firstName} ${lastName} was added`);
       }
       
       navigate("/patientlist");
    }

    const changeGender=(event)=>{
      setGender(event.target.value);
    }
   
  return (
    <div>
      <AppNavBar/>
     
      {isEdit?<div>Editing</div>:<div>New Patient</div>}
        <form onSubmit={submitForm}>
            <label htmlFor='firstName' class="form-label">First Name</label>
            <input type='text' id='firstName' value={firstName} onChange={(val)=>setFirstName(val.target.value)}/><br/>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' value={lastName} onChange={(val)=>setLastName(val.target.value)}/><br/>
            <label htmlFor='patientTZ'>Patient TZ </label>
            <input type='text' pattern='[0-9]{9}' id='patientTZ' value={patientTZ} onChange={(val)=>setPatientTZ(val.target.value)} /><br/>
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
            {/* <label htmlFor='gender'>Gender</label>
            <input type='text' id='gender' value={gender} onChange={(val)=>setGender(val.target.value)}/><br/> */} 
{/* <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inlineMale" name="inlineRadioOptions" value="male" onChange={changeGender} checked={gender==='male'} />
            <label class="form-check-label" for="inlineMale">Male</label>
</div>
<div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inlineFemale" name="inlineRadioOptions" value="female" onChange={changeGender} checked={gender==='female'} />
            <label class="form-check-input" for="html">Female</label>
</div>
<div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inlineOther" name="inlineRadioOptions" value="other" onChange={changeGender} checked={gender==='other'}/>
            <label class="form-check-input" for="html">Other</label> 
</div> */}
   <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" onChange={changeGender} checked={gender==='male'}/>
      <label class="form-check-label" for="inlineRadio1">Male</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" onChange={changeGender} checked={gender==='female'}/>
      <label class="form-check-label" for="inlineRadio2">Female</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="other" onChange={changeGender} checked={gender==='other'}/>
      <label class="form-check-label" for="inlineRadio3">Other</label>
    </div>
            <br></br>
            <button>Submit</button>

        
        </form>

     
    </div>
  )
}

export default CreatePatient