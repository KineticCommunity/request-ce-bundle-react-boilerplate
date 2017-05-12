import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Profile } from './Profile';

const props = {
  handleSubmit: jest.fn(),
  loaded: true,
  failed: false,
  data: {},
  fields: {
    username: {},
    displayName: {},
    email: {},
  },
};

describe('<Profile />', () => {
  test('verify snapshot', () => {
    const component = shallow(<Profile {...props} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
