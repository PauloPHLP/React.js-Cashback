import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SaleItem from './SaleItem';

configure({ adapter: new Adapter() });

describe('<SaleItem />', () => {
  it('renders the sale item area', () => {
    const saleItem = shallow(<SaleItem sale={[]} />);
    expect(saleItem.find('div.sale-item').length).toEqual(1);
  });
});
