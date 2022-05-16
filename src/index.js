import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import EmployeeHomePage from './EmployeeHomePage'
import AdminHomePage from './AdminHomePage'
import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {GlobalProvider} from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider>
  <BrowserRouter>
    <Switch>
    <Route path="/login" component={Login} exact />
    <Route path="/employee/homepage" component={EmployeeHomePage} exact />
    <Route path="/admin/homepage" component={AdminHomePage} exact />
    <Redirect to="/login" exact/>
    </Switch>
    </BrowserRouter>
    </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
