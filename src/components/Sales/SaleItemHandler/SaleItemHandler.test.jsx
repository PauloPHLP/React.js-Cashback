import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Store } from '../../../redux/store';
import SaleItemHandler from './SaleItemHandler';

configure({ adapter: new Adapter() });

describe('<SaleItemHandler />', () => {
  it('renders withou crashing', () => {
    const saleItemHandler = shallow(
      <Provider store={Store}>
        <BrowserRouter>
          <SaleItemHandler />
        </BrowserRouter>
      </Provider>
    ).html();

    expect(saleItemHandler);
  });
});
