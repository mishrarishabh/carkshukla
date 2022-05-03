import React,{useState,useContext} from "react";
import {GlobalContext} from './Context';
import TypeaheadExample from "./Typeahead";
import './style/employeeWork.css';
import {v1 as uuidv1} from "uuid";

const EmployeeHomePage = ()=>{
    const [rowcount,setRowCount] = useState([{uniqueid:"abcd87-821"}])
    const {check,workaddRow,removeaddrow,verifyUser,employeeworkupdate} = useContext(GlobalContext);
    
    const handleRemove=(id)=>{
        removeaddrow(id)
    }

    const handlchange=(event,id)=>{
        employeeworkupdate({[event.target.name]:event.target.value,uniqueid:id})
    }

    const handleaddRow=()=>{
        const uid = uuidv1().slice(0,10)
        workaddRow({uniqueid:uid})
        // setRowCount([...rowcount,{uniqueid:uid}])
    }
    console.log("******************check",check)
return (
    <>
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
            <td><TypeaheadExample placeholder="Choose Client Name" id={item.uniqueid}/></td>
            <td><TypeaheadExample placeholder="Choose Work Type" id={item.uniqueid}/></td>
            <td> <input type="number" id="quantity" name="hour" min="01" max="12" placeholder="HH" onChange={(e)=>handlchange(e,item.uniqueid)}></input>
            <input type="number" id="quantity" name="minute" min="0" max="59" placeholder="MM"  onChange={(e)=>handlchange(e,item.uniqueid)}></input></td>
            <td> <textarea name="remark" onChange={(e)=>handlchange(e,item.uniqueid)}/></td>
            <td><button className="removebutton" onClick={()=>handleRemove(item.uniqueid)}>REMOVE</button></td>
            </tr>
         )
     })
    }
    </table>
    <button className="submitapprovalButton">SUBMIT FOR APPROVAL</button>
    </>
)
}

export default EmployeeHomePage