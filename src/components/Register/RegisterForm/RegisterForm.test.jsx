import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Store } from '../../../redux/store';
import RegisterForm from './RegisterForm';

configure({ adapter: new Adapter() });

describe('<RegisterForm />', () => {
  it('renders withou crashing', () => {
    const registerForm = shallow(
      <Provider store={Store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>
    ).html();

    expect(registerForm);
  });
});
