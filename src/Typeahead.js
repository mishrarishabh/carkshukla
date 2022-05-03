import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import data from './data';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const TypeaheadField = (props) => {
  const {placeholder} = props
  const [selected, setSelected] = useState([]);
 console.log("jselection",selected)
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
