import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { CenterView } from '../../../storybook/stories/decorator';
import { Colors } from '../../../constants/colors';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => (
    <Button
      onPress={action('tapped-default')}
      style={{ backgroundColor: Colors.grey }}
    />
  ));
