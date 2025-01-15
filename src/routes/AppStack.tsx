import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, SettingsScreen} from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{fullScreenGestureEnabled: true, headerShown: false}}>
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={SettingsScreen} name="SettingsScreen" />
    </Stack.Navigator>
  );
}
