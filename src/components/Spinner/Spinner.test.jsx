import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
  it('renders the spinner div container', () => {
    const spinner = shallow(<Spinner />);
    expect(spinner.find('div.loader-container').length).toEqual(1);
  });
});
