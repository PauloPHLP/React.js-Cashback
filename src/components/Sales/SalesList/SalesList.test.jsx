import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SalesList from './SalesList';

configure({ adapter: new Adapter() });

describe('<SalesList />', () => {
  it('renders the main div', () => {
    const salesList = shallow(<SalesList />);
    expect(salesList.find('div.container').length).toEqual(2);
  });
});
