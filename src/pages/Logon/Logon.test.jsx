import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logon from './Logon';

configure({ adapter: new Adapter() });

describe('<Logon />', () => {
  it('renders the main section', () => {
    const logon = shallow(<Logon />);
    expect(logon.find('section.hero.is-fullheight').length).toEqual(1);
  });

  it('renders the body area', () => {
    const logon = shallow(<Logon />);
    expect(logon.find('div.hero-body').length).toEqual(1);
  });

  it('renders the foot area', () => {
    const logon = shallow(<Logon />);
    expect(logon.find('div.hero-foot').length).toEqual(1);
  });
});
