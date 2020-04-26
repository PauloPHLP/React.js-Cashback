import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegisterUser from './RegisterUser';

configure({ adapter: new Adapter() });

describe('<RegisterUser />', () => {
  it('renders the main div', () => {
    const registerUser = shallow(<RegisterUser />);
    expect(registerUser.find('div.register-container').length).toEqual(1);
  });
});
