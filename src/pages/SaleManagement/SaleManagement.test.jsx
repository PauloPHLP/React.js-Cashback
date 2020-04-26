import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SaleManagement from './SaleManagement';

configure({ adapter: new Adapter() });

describe('<SaleManagement />', () => {
  it('renders the main section', () => {
    const saleManagement = shallow(<SaleManagement />);
    expect(saleManagement.find('section.hero.is-fullheight').length).toEqual(1);
  });
});
