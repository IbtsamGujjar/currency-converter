import React from 'react';
import renderer from 'react-test-renderer';
import { Row } from '../Row';

test('Row Snapshot', () => {
  const snapshot = renderer.create(<Row />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
