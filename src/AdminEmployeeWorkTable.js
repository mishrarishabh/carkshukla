import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {products} from './EmployeeDataFormat';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
// omit...
const columns = [
  {
      dataField: "date",
      text: "Date",
      filter: textFilter()
    },
  {
    dataField: "name",
    text: "Employee",
    filter: textFilter()
  },
  {
    dataField: "clientName",
    text: "Client",
    filter: textFilter(),
  },
  {
    dataField: "workType",
    text: "Work",
    filter: textFilter()
  },
    {
      dataField: "status",
      text: "Status",
      filter: textFilter()
    },
    {
      dataField: "approvedBy",
      text: "Approved",
      filter: textFilter()
    },
    {
      dataField: "duration",
      text: "Duration",
    },
    {
      dataField: "remark",
      text: "Remark",
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