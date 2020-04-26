import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainForm from './MainForm';

configure({ adapter: new Adapter() });

describe('<MainForm />', () => {
  it('renders the main div', () => {
    const mainForm = shallow(<MainForm />);
    expect(mainForm.find('div').length).toEqual(1);
  });
});
