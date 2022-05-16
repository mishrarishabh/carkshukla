import React,{useState,useContext,useEffect} from "react";
import {GlobalContext} from './Context';
import TypeaheadExample from "./Typeahead";
import './style/employeeWork.css';
import {v1 as uuidv1} from "uuid";
import axios from 'axios';

const EmployeeHomePage = ()=>{
    const {check,workaddRow,removeaddrow,employeeworkupdate} = useContext(GlobalContext);
        
    useEffect(()=>{
        if(check.userdetails === undefined)
        {
           window.location.href='http://localhost:3000/login';
        }
    },[])
    const submitApproval= async()=>{
        const validation = check.workrowcount.reduce((acc,curr)=>{
            if(Object.keys(curr).length<6 ||Object.values(curr).includes(undefined)||Object.values(curr).includes(''))
            {
              acc.push(false)
            }
            return acc;
        },[])
        if(validation.includes(false))
        {
            alert("Fields should not be empty");
        }
        else{
             console.log("(((((((((",check.workrowcount)
             const payloadData = check.workrowcount.map((item)=>{
                 delete item.uniqueid
                 return {...item,empId:check.userdetails[0].userId};
             })
            const response = await axios({
            method:'POST',
            url:'https://carkshukla.herokuapp.com/employee/homepage',
            data:payloadData
        })
        console.log(response)
        }
    }
    
    const handleRemove=(id)=>{
        removeaddrow(id)
    }

    const handlchange=(event,id)=>{
        employeeworkupdate({[event.target.name]:event.target.value.trim(),uniqueid:id})
    }
    const handleLogout=()=>{
        window.location.href='http://localhost:3000/login';
    }
    const handleaddRow=()=>{
        const uid = uuidv1().slice(0,10)
        workaddRow({uniqueid:uid})
    }
return (check?.userdetails?.[0].userTpe ? (
    <>
     <button className="logoutButton" onClick={handleLogout}>Logout</button>
    <h1>Welcome</h1>
    <button className="addrowbutton" onClick={()=>handleaddRow()}>ADD ROW</button>
   <table>
       <tr>
     <th>Client Name</th>
     <th>Work Type</th>
     <th>Duration</th>
     <th>Remark*</th>
     <th>Action</th>
     </tr>
   {
   check && check.workrowcount && check.workrowcount.map((item)=>{
         return (
            <tr key={item.uniqueid}>
            <td><TypeaheadExample id={item.uniqueid} name="clientName" placeholder="Choose Client Name" /></td>
            <td><TypeaheadExample id={item.uniqueid} name="workType" placeholder="Choose Work Type" /></td>
            <td> <input type="number" id="quantity" name="durationHr" min="01" max="12" placeholder="HH" onChange={(e)=>handlchange(e,item.uniqueid)}></input>
            <input type="number" id="quantity" name="durationMn" min="0" max="59" placeholder="MM"  onChange={(e)=>handlchange(e,item.uniqueid)}></input></td>
            <td> <textarea name="empRemark" onChange={(e)=>handlchange(e,item.uniqueid)}/></td>
            <td><button className="removebutton" onClick={()=>handleRemove(item.uniqueid)}>REMOVE</button></td>
            </tr>
         )
     })
    }
    </table>
    <button className="submitapprovalButton"  onClick={()=>submitApproval()}>SUBMIT FOR APPROVAL</button>
    </>
) : <></>)
}

export default EmployeeHomePage