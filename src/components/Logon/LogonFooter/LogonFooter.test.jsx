import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LogonFooter from './LogonFooter';

configure({ adapter: new Adapter() });

describe('<LogonFooter />', () => {
  it('renders the nav area', () => {
    const logonFooter = shallow(<LogonFooter />);
    expect(logonFooter.find('nav.tabs').length).toEqual(1);
  });

  it('renders the main container', () => {
    const logonFooter = shallow(<LogonFooter />);
    expect(logonFooter.find('div.container').length).toEqual(1);
  });
});
