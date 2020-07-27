import React from 'react';
import renderer from 'react-test-renderer';
import { KeyboardSpacer } from '../KeyboardSpacer';

test('KeyboardSpacer Snapshot', () => {
  const snapshot = renderer.create(<KeyboardSpacer />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
