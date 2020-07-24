import { Linking, Alert } from 'react-native';

export const openExternalLink = (url) => {
  Linking.openURL(url).catch(() => {
    Alert.alert('Sorry, something went wrong.', 'Please try again later.', [
      { text: 'OK', style: 'default' },
    ]);
  });
};
