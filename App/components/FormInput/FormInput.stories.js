import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { FormInput } from './FormInput';
import { WithFonts } from '../../../storybook/stories/decorator';

storiesOf('FormInput', module)
  .addDecorator((getStory) => <WithFonts>{getStory()}</WithFonts>)
  .add('Email', () => (
    <FormInput
      label="E-Mail"
      initialValue="abc@mail.com"
      keyboardType="email-address"
    />
  ))
  .add('Password', () => (
    <FormInput
      label="Password"
      initialValue="abc@mail.com"
      secureTextEntry
      keyboardType="default"
      required
      minLength={5}
    />
  ));
