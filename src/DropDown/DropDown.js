import React from 'react';
import './DropDown.css';

function DropDown(props) {

  const options = props.routines.map(routine => {
    return <option key={routine.name} value={routine.name}>{routine.name}</option>
  })

  return (
    <select id="routines" onChange={(e) =>  props.changeName(e.target.value)}>
      {options}
    </select>
  );
}

export default DropDown;