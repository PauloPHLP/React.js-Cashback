import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainFormFull from './MainFormFull';

configure({ adapter: new Adapter() });

describe('<MainFormFull />', () => {
  it('renders the main section', () => {
    const mainFormFull = shallow(<MainFormFull />);
    expect(mainFormFull.find('section.hero.is-fullheight').length).toEqual(1);
  });

  it('renders the hero-body div', () => {
    const mainFormFull = shallow(<MainFormFull />);
    expect(mainFormFull.find('div.hero-body').length).toEqual(1);
  });
});
