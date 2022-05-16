import React,{useState,useContext,useEffect} from "react";
import {GlobalContext} from './Context';
import AddClientModal from './AddClientModal'
import AddUserModal from './AddUserModal'
import ViewClientModal from './ViewClientModal'
import ViewUserModal from './ViewUserModal'
import {Table} from './AdminEmployeeWorkTable'
const AdminHomePage = ()=>{
    const {check,verifyUser} = useContext(GlobalContext);
    useEffect(()=>{
        if(check.userdetails === undefined)
        {
           window.location.href='http://localhost:3000/login';
        }
    },[]) 
    const handleLogout=()=>{
        window.location.href='http://localhost:3000/login';
    }
    return (check?.userdetails?.[0].userTpe ?(
        <>
        <button className="logoutButton" onClick={handleLogout}>Logout</button>
        <h1>Welcome Rishabh</h1>
        <AddClientModal/>
        <AddUserModal/>
        <ViewClientModal/>
        <ViewUserModal/>
        <Table/>
        </>
    ): <></>)
}

export default AdminHomePage