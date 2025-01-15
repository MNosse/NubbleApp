import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';
import {
  ForgotPasswordScreen,
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens';

export type AuthStackParamList = {
  ForgotPasswordScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    description: string;
    icon: Pick<IconProps, 'color' | 'name'>;
    title: string;
  };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
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
  );
}
