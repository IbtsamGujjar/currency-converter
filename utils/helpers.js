import { Linking, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const openExternalLink = (url) => {
  Linking.openURL(url).catch(() => {
    Alert.alert('Sorry, something went wrong.', 'Please try again later.', [
      { text: 'OK', style: 'default' },
    ]);
  });
};

export const saveDataToStorage = (userEmail) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      userEmail,
    })
  );
};
