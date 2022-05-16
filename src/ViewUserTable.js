import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {products} from './EmployeeDataFormat';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [
   {
      dataField: "date",
      text: "Employee Name",
      filter: textFilter()
   },
   {
    dataField: "date",
    text: "UserId",
    filter: textFilter()
 },
 {
  dataField: "date",
  text: "Password",
  filter: textFilter()
},
    {
      dataField: "action",
      text: "Action",
    }
];

export const Table =()=>{
  return(
<BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } pagination={ paginationFactory() } />
  )}