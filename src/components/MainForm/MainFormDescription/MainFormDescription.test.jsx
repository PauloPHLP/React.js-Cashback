import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import icon from '../../../assets/images/icon.png';
import MainFormDescription from './MainFormDescription';

configure({ adapter: new Adapter() });

describe('<MainFormDescription />', () => {
  it('renders the main div', () => {
    const mainFormDescription = shallow(<MainFormDescription />);
    expect(mainFormDescription.find('div').length).toEqual(1);
  });

  it('renders the correct image', () => {
    const mainFormDescription = shallow(<MainFormDescription />);
    expect(mainFormDescription.find('img').prop('src')).toEqual(icon);
  });
});
