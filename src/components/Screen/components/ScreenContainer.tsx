import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';

interface Props {
  backgroundColor: string;
  children: ReactNode;
}

export function ScrollViewContainer({backgroundColor, children}: Props) {
  return <ScrollView style={{backgroundColor}}>{children}</ScrollView>;
}

export function ViewContainer({backgroundColor, children}: Props) {
  return <View style={{backgroundColor}}>{children}</View>;
}
