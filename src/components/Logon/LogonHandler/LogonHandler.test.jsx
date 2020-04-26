import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Store } from '../../../redux/store';
import LogonHandler from './LogonHandler';

configure({ adapter: new Adapter() });

describe('<LogonHandler />', () => {
  it('renders withou crashing', () => {
    const logonHandler = shallow(
      <Provider store={Store}>
        <BrowserRouter>
          <LogonHandler />
        </BrowserRouter>
      </Provider>
    ).html();

    expect(logonHandler);
  });
});
