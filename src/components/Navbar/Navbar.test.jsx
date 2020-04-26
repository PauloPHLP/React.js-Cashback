import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import logo from '../../assets/images/logo.png';
import Navbar from './Navbar';

configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
  it('renders the main div', () => {
    const navbar = shallow(<Navbar />);
    expect(navbar.find('div.hero-head').length).toEqual(1);
  });

  it('renders the header area', () => {
    const navbar = shallow(<Navbar />);
    expect(navbar.find('header').length).toEqual(1);
  });

  it('renders the greeting message area', () => {
    const navbar = shallow(<Navbar />);
    expect(navbar.find('p.greeting-message').length).toEqual(1);
  });

  it('renders the correct image', () => {
    const navbar = shallow(<Navbar />);
    expect(navbar.find('img').prop('src')).toEqual(logo);
  });
});
