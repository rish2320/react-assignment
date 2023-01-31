import { stringify } from 'querystring';
import React, { useState } from'react';



const Student=()=>{
    let[allData,setData]=useState<Object[]>();
    let[sid,setSID]=useState<number>();
    let[statusVal,setStatus]=useState<string>();
    let[month,setMonth]=useState<number>();
    let[year,setYear]=useState<number>();
const  punchin=async()=>{
    let url="http://localhost:8000/api/school/student/punchin";
    // let response=
    await fetch(url,{
        method:"POST",
        headers:{
            "Accept":"*/*",
            
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            sid:sid
        })
    })
    .then(res=>res.json())
    .then(data=>console.log('Student',data))
    .catch((e)=>{
        console.log('error',e)
    });
    // let data= await response.json();
    // statusVal=data;
    // setStatus(data);
    


}
const getStudentAtttendance=async ()=>{
    
    let url= `http://localhost:8000/api/school/student/${sid}/${month}/${year}`;

    await fetch(url,{
        method:"GET"
    })
    .then(res=>res.json())
    .then(data=>console.log('Attendance',data))
    .catch((e)=>{
        console.log("Error",e)
    });
}
const punchout=async()=>{
    let url="http://localhost:8000/api/school/student/punchout";
    
   
    // let response=
    await fetch(url,{
        method:"POST",
        headers:{
            "Accept":"*/*",
            
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            sid:sid
        })
    })
    .then(res=>res.json())
    .then(data=>console.log('Student',data))
    .catch((e)=>{
        console.log('error',e)
    });
}
    return (
        <>
        
            {statusVal}
            {/* <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
<div>
<div className="input-group input-group-lg">
  <span className="input-group-text" id="inputGroup-sizing-lg">Enter your Student Id</span>
  <input type={'number'} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value ={sid} onChange={(e)=>{setSID(Number(e.target.value))}} min="1"/>
</div>

<button onClick={punchin}>Punch-In</button>
<button onClick={punchout}>Punch-Out</button>
</div>


<div className="input-group input-group-lg">
<span className="input-group-text" id="inputGroup-sizing-lg">Enter your Student Id</span>
  <input type={'number'} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value ={sid} onChange={(e)=>{setSID(Number(e.target.value))}} min="1"/>
  
<div className="input-group">
  <span className="input-group-text">Month and Year </span>
  <input type={'number'} aria-label="First name" className="form-control" value={month} onChange={(e)=>{setMonth(Number(e.target.value))}} min="1" max="12"/>
  <input type={'number'} aria-label="Last name" className="form-control" value={year} onChange={(a)=>{setYear(Number(a.target.value))}} min="1"/>
</div>
</div>
 <div>
 <button onClick={getStudentAtttendance}>Get</button></div>    
        </>
    );
}
export default Student;