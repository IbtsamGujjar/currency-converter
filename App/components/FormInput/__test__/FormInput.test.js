import React from 'react';
import renderer from 'react-test-renderer';
import { FormInput } from '../FormInput';

test('FormInput Snapshot', () => {
  const snapshot = renderer.create(<FormInput />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
