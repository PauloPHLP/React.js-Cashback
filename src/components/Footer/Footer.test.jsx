import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Store } from '../../redux/store';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('renders withou crashing', () => {
    const footer = shallow(
      <Provider store={Store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    ).html();

    expect(footer);
  });
});
