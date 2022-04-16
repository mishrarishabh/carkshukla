import React,{useState,useContext} from "react";
import {GlobalContext} from './Context';
import TypeaheadExample from "./Typeahead";
import './style/employeeWork.css';
import {v1 as uuidv1} from "uuid";

const EmployeeHomePage = ()=>{
    const [rowcount,setRowCount] = useState([{uniqueid:"abcd87-821"}])
    const {check,workaddRow,verifyUser} = useContext(GlobalContext);

    const handleRemove=(id)=>{
        console.log(rowcount,id)
       const result = rowcount.filter((item)=>{
        if(item.uniqueid !== id)
        {
           return true;
        }   
        else
        {
            return false;
        }
       })
       setRowCount(result)
    }

    const handleaddRow=()=>{
        const uid = uuidv1().slice(0,10)
        workaddRow({uniqueid:uid})
        // setRowCount([...rowcount,{uniqueid:uid}])
    }
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
            <td><TypeaheadExample/></td>
            <td><TypeaheadExample/></td>
            <td> <input type="number" id="quantity" name="quantity" min="1" max="12" placeholder="HH"></input>
            <input type="number" id="quantity" name="quantity" min="0" max="59" placeholder="MM"></input></td>
            <td> <textarea/></td>
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