import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../App/screens/Home';
import { Options } from '../App/screens/Options';
import { CurrencyList } from '../App/screens/CurrencyList';
import { Themes } from '../App/screens/Themes';
import { Login } from '../App/screens/Login';

const MainStack = createStackNavigator();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen name="Options" component={Options} />
      <MainStack.Screen name="Themes" component={Themes} />
    </MainStack.Navigator>
  );
};

const ModalStack = createStackNavigator();
export const ModalStackScreen = () => {
  return (
    <ModalStack.Navigator mode="modal">
      <ModalStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <ModalStack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({ navigation, route }) => ({
          title: route.params && route.params.title,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{ paddingHorizontal: 10 }}
            >
              <Entypo name="cross" size={30} color="#4f6d7a" />
            </TouchableOpacity>
          ),
          headerLeft: null,
        })}
      />
    </ModalStack.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="Auth"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthStackNavigator.Navigator>
  );
};
