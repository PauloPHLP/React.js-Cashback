import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal';

configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  it('renders the main div', () => {
    const modal = shallow(<Modal />);
    expect(modal.find('div.modal').length).toEqual(1);
  });
});
