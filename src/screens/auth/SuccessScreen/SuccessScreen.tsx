import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../../routes/Routes';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({navigation, route}: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text marginTop="s24" preset="headingLarge">
        {route.params.title}
      </Text>
      <Text marginTop="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button
        marginTop="s40"
        onPress={goBackToBegin}
        title="Voltar ao início"
      />
    </Screen>
  );
}
