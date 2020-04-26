import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import logo from '../../../assets/images/logo.png';
import LogonLogoImage from './LogonLogoImage';

configure({ adapter: new Adapter() });

describe('<LogonLogoImage />', () => {
  it('renders the main div', () => {
    const logonLogoImage = shallow(<LogonLogoImage />);
    expect(logonLogoImage.find('div.columns').length).toEqual(1);
  });

  it('renders the correct image', () => {
    const logonLogoImage = shallow(<LogonLogoImage />);
    expect(logonLogoImage.find('img').prop('src')).toEqual(logo);
  });
});
