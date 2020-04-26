import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LogonForm from './LogonForm';

configure({ adapter: new Adapter() });

describe('<LogonForm />', () => {
  it('renders the main div', () => {
    const logonForm = shallow(<LogonForm />);
    expect(logonForm.find('div.columns.is-centered').length).toEqual(1);
  });
});
