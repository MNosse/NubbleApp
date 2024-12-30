import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        boxProps={{marginBottom: 's20'}}
        errorMessage="mensagem de erro"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <PasswordInput
        boxProps={{marginBottom: 's10'}}
        label="Senha"
        placeholder="Digite sua senha"
      />
      <Text
        bold
        color="primary"
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall">
        Esqueci minha senha
      </Text>
      <Button marginTop="s48" title="Entrar" />
      <Button
        onPress={navigateToSignUpScreen}
        marginTop="s12"
        preset="outline"
        title="Criar uma conta"
      />
    </Screen>
  );
}
