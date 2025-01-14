import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';
import {
  ForgotPasswordScreen,
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens';

export type RootStackParamList = {
  ForgotPasswordScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    description: string;
    icon: Pick<IconProps, 'color' | 'name'>;
    title: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{fullScreenGestureEnabled: true, headerShown: false}}>
        <Stack.Screen
          component={ForgotPasswordScreen}
          name="ForgotPasswordScreen"
        />
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
        <Stack.Screen component={SignUpScreen} name="SignUpScreen" />
        <Stack.Screen component={SuccessScreen} name="SuccessScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
