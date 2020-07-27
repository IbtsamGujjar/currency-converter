import React from 'react';
import renderer from 'react-test-renderer';
import { Divider } from '../Divider';

test('Divider Snapshot', () => {
  const snapshot = renderer.create(<Divider />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
