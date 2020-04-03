import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

function Slider(props) {
  useEffect(() => {
    const setValue = (e) => {
      props.handler(props.settingName, e.target.value)
    }

    const slider = document.querySelector(`#${props.settingName}`);
    slider.addEventListener('change', setValue)

    return () => slider.removeEventListener('change', setValue);
  })

  return (
    <input
      type='range'
      min={props.min}
      max={props.max}
      defaultValue={props.defaultValue}
      className='slider'
      id={props.settingName}
      aria-label={props.settingName} />
  );
}

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
  settingName: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
}

export default Slider;