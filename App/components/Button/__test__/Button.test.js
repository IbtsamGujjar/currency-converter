import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';

test('Button Snapshot', () => {
  const snapshot = renderer.create(<Button />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
