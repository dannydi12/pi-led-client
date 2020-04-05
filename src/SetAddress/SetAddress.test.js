import React from 'react';
import ReactDOM from 'react-dom';
import SetAddress from './SetAddress';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SetAddress toggleAddressModal={() => {}} populateRoutines={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
