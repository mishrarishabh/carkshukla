import React,{useState,useContext} from "react";
import {useHistory} from 'react-router-dom'
import {GlobalContext} from './Context';
import axios from 'axios';
import './style/Login.css'
import data from './data'

const Login = () => { 
    console.log(data);
    const [userinput,setUserInput] = useState({})
    const history = useHistory();
    const {check,verifyUser} = useContext(GlobalContext);

    const checkDetails = async ()=>{
        console.log("***************userin",userinput)
       const response = await axios({
            method:'POST',
            url:'https://carkshukla.herokuapp.com/login',
            data:userinput
        })
        console.log(response);
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
       console.log("response checking ************",response)
       if(response.data)
       {
        verifyUser(userinput);
        history.push("/employee/homepage");
       }
       else
       {
           alert("Enter correct Details");
       }
    }
    return (
        <>
            <h1>CA RAKESH SHUKLA</h1>
            <div className="login">
                <div className="loginfieldalign">
                    <div className="loginfield">
                        <form onSubmit={handleSubmit}>
                        <select name="userTpe" onChange={handleChange}  required>
                            <option value="" selected disabled hidden>Select Your Role</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </select>
                        <input placeholder="Enter UserId" name="userId" onChange={handleChange} className="logininput" required />
                        <input placeholder="Enter Password" name = "password"  onChange={handleChange} className="logininput" required />
                        <button className="loginbutton">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
