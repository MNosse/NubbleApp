import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TextProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';

import {AppTabBottomTabParamList} from './AppTabNavigator';
import {mapScreenToProps} from './mapScreenToProps';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box {...$boxWrapper} style={[{paddingBottom: bottom}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            canPreventDefault: true,
            target: route.key,
            type: 'tabPress',
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              merge: true,
              name: route.name,
              params: route.params,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            target: route.key,
            type: 'tabLongPress',
          });
        };

        return (
          <TouchableOpacityBox
            {...$itemWrapper}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityState={isFocused ? {selected: true} : {}}
            key={route.key}
            onLongPress={onLongPress}
            onPress={onPress}
            style={{flex: 1}}
            testID={options.tabBarButtonTestID}>
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text
              {...$label}
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  backgroundColor: 'background',
  flexDirection: 'row',
  paddingTop: 's12',
};

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  accessibilityRole: 'button',
  alignItems: 'center',
};

const $label: TextProps = {
  marginTop: 's4',
  preset: 'paragraphCaption',
  semiBold: true,
};
