import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Root has app class', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.hasClass('App')).toEqual(true);
});
