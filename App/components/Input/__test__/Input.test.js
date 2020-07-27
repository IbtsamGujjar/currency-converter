import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from '../Input';

test('Input Snapshot', () => {
  const snapshot = renderer.create(<Input />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
