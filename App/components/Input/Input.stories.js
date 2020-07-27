import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';
import { CenterView } from '../../../storybook/stories/decorator';

storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Editable', () => (
    <Input
      buttonText="USD"
      value="100"
      editable
      onPress={action('tapped-default')}
    />
  ))
  .add('Disabled', () => (
    <Input
      buttonText="USD"
      value="100"
      editable={false}
      onPress={action('tapped-default')}
    />
  ));
