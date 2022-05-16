/* eslint-disable no-unused-vars */
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

let dateFilter;
let nameFilter;
let clientFilter;
let workFilter;
let statusFilter;
let approveFilter;

export const columns = [
    {
        dataField: "date",
        text: "Date",
        filter: textFilter({
          getFilter: filter => {
            dateFilter = filter;
          }
        })
      },
    {
      dataField: "name",
      text: "Employee",
      filter: textFilter({
        getFilter: filter => {
          nameFilter = filter;
        }
      })
    },
    {
      dataField: "clientName",
      text: "Client",
      filter: textFilter({
        getFilter: filter => {
          clientFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "workType",
      text: "Work",
      filter: textFilter({
        getFilter: filter => {
          workFilter = filter;
        }
      })
    },
      {
        dataField: "status",
        text: "Status",
        filter: textFilter({
          getFilter: filter => {
            statusFilter = filter;
          }
        })
      },
      {
        dataField: "approvedBy",
        text: "Approved",
        filter: textFilter({
          getFilter: filter => {
            approveFilter = filter;
          }
        })
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