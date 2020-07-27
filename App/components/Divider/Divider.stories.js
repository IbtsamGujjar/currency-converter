import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Divider } from './Divider';
import { CenterView } from '../../../storybook/stories/decorator';

storiesOf('Divider', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => <Divider style={{ backgroundColor: 'red' }} />);
