import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Row } from './Row';
import { CenterView } from '../../../storybook/stories/decorator';

import { Colors } from '../../../constants/colors';

storiesOf('Row', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Basic', () => (
    <Row
      title="Option"
      icon={<Entypo name="chevron-right" size={20} color={Colors.grey} />}
      onPress={action('tapped-default')}
    />
  ));
