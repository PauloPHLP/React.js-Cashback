import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Store } from '../../redux/store';
import Sales from './Sales';

configure({ adapter: new Adapter() });

describe('<Sales />', () => {
  it('renders without crashing', () => {
    const sales = shallow(
      <Provider store={Store}>
        <BrowserRouter>
          <Sales />
        </BrowserRouter>
      </Provider>
    ).html();

    expect(sales);
  });
});
