import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {IconProps} from '../components/Icon/Icon';
import {ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';

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
