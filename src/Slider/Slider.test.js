import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slider from './Slider';

configure({ adapter: new Adapter() });

beforeAll(() => {
  const div = document.createElement('div');
  window.domNode = div;
  document.body.appendChild(div);

  const slider = document.createElement('input');
  slider.id = "delay";
  document.body.append(slider);
})

it('renders without crashing', () => {
  const wrapper = shallow(<Slider
    min={1}
    max={1000}
    defaultValue={500}
    settingName={'delay'}
    handler={() => {}} />, { attachTo: window.domNode });
});