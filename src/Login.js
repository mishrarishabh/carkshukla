import React,{useState,useContext,useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {GlobalContext} from './Context';
import axios from 'axios';
import './style/Login.css'
import data from './data'

const Login = () => { 
    const [userinput,setUserInput] = useState({})
    const history = useHistory();
    const {check,verifyUser} = useContext(GlobalContext);
    useEffect(()=>{
     if(check?.userdetails?.[0].userTpe)
     {
        window.location.reload();
     }
    },[])
    const checkDetails =  async ()=>{
       const response = await axios({
            method:'POST',
            url:'https://carkshukla.herokuapp.com/login',  
            data:userinput
        })
        return response;
    }
    const handleChange = (event)=>{
        const keyInput = event.target.name;
        const keyValue = event.target.value;
       setUserInput({...userinput,[keyInput]:keyValue})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
       const response =  await checkDetails();
       if(response.data)
       {
        verifyUser(userinput);
        if(userinput.userTpe !== 'admin')
        history.push("/employee/homepage");
        else
        history.push("/admin/homepage");
       }
       else
       {
           alert("Enter correct Details");
           window.location.reload();
       }
    }
    return (window.innerWidth>1000 && (
        <>
            <h1>CA RAKESH SHUKLA</h1>
            <div className="login">
                <div className="loginfieldalign">
                    <div className="loginfield">
                        <form onSubmit={handleSubmit}>
                        <select name="empDesignation" onChange={handleChange}  required>
                            <option value="" selected disabled hidden>Select Your Role</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </select>
                        <input placeholder="Enter UserId" name="empId" onChange={handleChange} className="logininput" required />
                        <input placeholder="Enter Password" name = "empPassword"  onChange={handleChange} className="logininput" required />
                        <button className="loginbutton">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    // eslint-disable-next-line no-mixed-operators
    )||<h1>You can't open this link on the mobile device</h1>);
}

export default Login;
