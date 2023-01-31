import React, { useState } from 'react'

const Principal=()=>{
    
    let[class1,setClass1]=useState<string>();
    let[names,setNameS]=useState<string>();
    let[namet,setNameT]=useState<string>();
    
    const  createStudent=async()=>{
        let url="http://localhost:8000/api/school/student";
        // let response=
        await fetch(url,{
            method:"POST",
            headers:{
                "Accept":"*/*",
                
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name:names,
                class:class1
            })
        })
        .then(res=>res.json())
        .then(data=>console.log('Student',data))
        .catch((e)=>{
            console.log('error',e)
        });
        setNameS("");
        setClass1("");
        
        
    
    
    }
    const  createTeacher=async()=>{
        let url="http://localhost:8000/api/school/teacher";
        // let response=
        await fetch(url,{
            method:"POST",
            headers:{
                "Accept":"*/*",
                
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name:namet
                
            })
        })
        .then(res=>res.json())
        .then(data=>console.log('Teacher',data))
        .catch((e)=>{
            console.log('error',e)
        });
        
        setNameT("");
    
    
    }
    return(
        <>
    <div>
       <div>
  <div className="input-group input-group-lg">
<span className="input-group-text" id="inputGroup">Enter the Class</span>
  <input type={'text'} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value ={class1} onChange={(e)=>{setClass1((e.target.value))}} />
  <div className="input-group input-group-lg">
  <span className="input-group-text">Enter your Full Name </span>
  <input type={'text'} aria-label="Sizing example input"aria-describedby="inputGroup-sizing-lg" className="form-control" value={names} onChange={(e)=>{setNameS(e.target.value)}} />
  
</div>
</div>
 <div>
 </div>
 <button onClick={createStudent}>Create</button></div>  
 <div>
  <div className="input-group input-group-lg">
<span className="input-group-text" id="inputGroup-sizing-lg">Enter the Full Name</span>
  <input type={'text'} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value ={namet} onChange={(e)=>{setNameT((e.target.value))}} min="1"/>
 
</div>
 <div>
 </div>
 <button onClick={createTeacher}>Create</button></div>  
    </div> 
    </>
    );
}
export default Principal;