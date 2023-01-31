import { stringify } from 'querystring';
import React, { useState } from'react';



const Teacher=()=>{
    let[allData,setData]=useState<Object[]>();
    let[tid,setTID]=useState<number>();
    let[statusVal,setStatus]=useState<string>();
    let[month,setMonth]=useState<number>();
    let[year,setYear]=useState<number>();
    let[class1,setClass1]=useState<string>();
    

const  punchin=async()=>{
    let url="http://localhost:8000/api/school/teacher/punchin";
    // let response=
    await fetch(url,{
        method:"POST",
        headers:{
            "Accept":"*/*",
            
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            tid:tid
        })
    })
    .then(res=>res.json())
    .then(data=>console.log('Teacher',data))
    .catch((e)=>{
        console.log('error',e)
    });
    // let data= await response.json();
    // statusVal=data;
    // setStatus(data);
    


}

const punchout=async()=>{
    let url="http://localhost:8000/api/school/teacher/punchout";
    
   
    // let response=
    await fetch(url,{
        method:"POST",
        headers:{
            "Accept":"*/*",
            
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            tid:tid
        })
    })
    .then(res=>res.json())
    .then(data=>console.log('Teacher',data))
    .catch((e)=>{
        console.log('error',e)
    });
}
const getTeacherAtttendance=async ()=>{
    
    let url= `http://localhost:8000/api/school/student/${tid}/${month}/${year}`;

    await fetch(url,{
        method:"GET"
    })
    .then(res=>res.json())
    .then(data=>console.log('Attendance',data))
    .catch((e)=>{
        console.log("Error",e)
    });
}
const getClassAtttendance=async ()=>{
    
    let url= `http://localhost:8000/api/school/${class1}`;

    await fetch(url,{
        method:"GET"
    })
    .then(res=>res.json())
    .then(data=>console.log('Attendance',data))
    .catch((e)=>{
        console.log("Error",e)
    });
}
    return(
        <div>
            <div className="input-group input-group-lg">
  <span className="input-group-text" id="inputGroup-sizing-lg">Enter your Teacher Id</span>
  <input type={'number'} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value ={tid} onChange={(e)=>{setTID(Number(e.target.value))}} min="1"/>
</div>
<button onClick={punchin}>Punch-In</button>
<button onClick={punchout}>Punch-Out</button>
<div className="input-group input-group-lg">
<span className="input-group-text" id="inputGroup-sizing-lg">Enter your Teacher Id</span>
  <input type={'number'} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value ={tid} onChange={(e)=>{setTID(Number(e.target.value))}} min="1"/>
  
<div className="input-group">
  <span className="input-group-text">Month and Year </span>
  <input type={'number'} aria-label="First name" className="form-control" value={month} onChange={(e)=>{setMonth(Number(e.target.value))}} min="1" max="12"/>
  <input type={'number'} aria-label="Last name" className="form-control" value={year} onChange={(a)=>{setYear(Number(a.target.value))}} min="1"/>
</div>
</div>
 <div>
 <button onClick={getTeacherAtttendance}>Get</button></div>   

  <div>
  <div className="input-group input-group-lg">
<span className="input-group-text" id="inputGroup-sizing-lg">Enter the Class</span>
  <input type={'text'} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value ={class1} onChange={(e)=>{setClass1((e.target.value))}} min="1"/>
  <div className="input-group">
  <span className="input-group-text">Month and Year </span>
  <input type={'number'} aria-label="First name" className="form-control" value={month} onChange={(e)=>{setMonth(Number(e.target.value))}} min="1" max="12"/>
  <input type={'number'} aria-label="Last name" className="form-control" value={year} onChange={(a)=>{setYear(Number(a.target.value))}} min="1"/>
</div>
</div>
 <div>
 </div>
 <button onClick={getClassAtttendance}>Get</button></div>   </div>      
        

    );
}
export default Teacher;