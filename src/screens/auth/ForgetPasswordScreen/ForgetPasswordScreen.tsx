import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    // TODO: submit form

    reset({
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
      title: 'Enviamos as instruções para seu e-mail',
    });
  }

  return (
    <Screen canGoBack>
      <Text marginBottom="s16" preset="headingLarge">
        Esqueci minha senha
      </Text>
      <Text marginBottom="s32" preset="paragraphLarge">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        boxProps={{marginBottom: 's40'}}
        errorMessage="mensagem de erro"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}
