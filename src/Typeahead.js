import React, { useState,useEffect,useContext } from 'react';
import {GlobalContext} from './Context';
import { Typeahead } from 'react-bootstrap-typeahead';
import data from './data';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const TypeaheadField = (props) => {
  const {placeholder,name,id} = props
  const [selected, setSelected] = useState([]);
  const {check,employeeworkupdate} = useContext(GlobalContext);
  useEffect(()=>{
    employeeworkupdate({[name]:selected[0],uniqueid:id})
  },[selected[0]])
  return (
    <Typeahead
      id="typeahead"
      onChange={setSelected}
      options={data}
      placeholder={placeholder}
      selected={selected}
    />
  );
};

export default TypeaheadField;
