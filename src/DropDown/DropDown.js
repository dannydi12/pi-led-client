import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

function DropDown(props) {  
  const options = props.routines.map(routine => {
    return <option key={routine.name} value={routine.name}>{routine.name}</option>
  })

  return (
    <select id="routines" aria-label='set a routine' onChange={(e) =>  props.changeName(e.target.value)}>
      {options}
    </select>
  );
}

DropDown.propTypes = {
  routines: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    customOptions: PropTypes.array.isRequired
  })).isRequired
}

export default DropDown;