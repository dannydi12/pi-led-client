import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

function DropDown(props) {
  const options = props.routines
    .map((routine) => <option key={routine.name} value={routine.name}>{routine.name}</option>);

  return (
    <select id="routines" aria-label="set a routine" onChange={(e) => props.changeName('routineName', e.target.value)}>
      {options}
    </select>
  );
}

DropDown.propTypes = {
  routines: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    customOptions: PropTypes.array.isRequired,
  })).isRequired,
  changeName: PropTypes.func.isRequired,
};

export default DropDown;
