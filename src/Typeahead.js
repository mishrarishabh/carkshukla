import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import data from './data';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const TypeaheadField = () => {
  const [selected, setSelected] = useState([]);
 console.log("jselection",selected)
  return (
    <Typeahead
      id="typeahead"
      onChange={setSelected}
      options={data}
      placeholder="Choose Client Name"
      selected={selected}
    />
  );
};

export default TypeaheadField;
