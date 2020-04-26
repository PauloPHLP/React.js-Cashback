import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Store } from '../../../redux/store';
import SalesForm from './SalesForm';

configure({ adapter: new Adapter() });

describe('<SalesForm />', () => {
  it('renders withou crashing', () => {
    const salesForm = shallow(
      <Provider store={Store}>
        <BrowserRouter>
          <SalesForm />
        </BrowserRouter>
      </Provider>
    ).html();

    expect(salesForm);
  });
});
