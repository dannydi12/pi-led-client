import React from 'react';
import ReactDOM from 'react-dom';
import DropDown from './DropDown';

it('renders without crashing', () => {
  const routines = [
    {
      "name": "Scanner",
      "description": "Please stand still while the system invasively scans your body and deepest desires.",
      "customOptions": [
        "brightness",
        "color",
        "delay"
      ]
    },
    {
      "name": "Colorful Scanner",
      "description": "Please stand still while the system invasively scans your body and deepest desires (child edition).",
      "customOptions": [
        "brightness",
        "delay"
      ]
    },
    {
      "name": "Wake Up",
      "description": "This could be used to wake you up.",
      "customOptions": [
        "brightness",
        "color"
      ]
    }
  ]

  const div = document.createElement('div');
  ReactDOM.render(<DropDown routines={routines}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});