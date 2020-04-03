import React, { useEffect } from 'react';
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

export default Slider;