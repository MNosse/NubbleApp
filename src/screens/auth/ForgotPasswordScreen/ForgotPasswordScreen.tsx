import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamList} from '@routes';


import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';


type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordSchema),
  });

  function submitForm(values: ForgotPasswordSchema) {
    console.log(values);
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
      <FormTextInput
        boxProps={{marginBottom: 's40'}}
        control={control}
        label="E-mail"
        name="email"
        placeholder="Digite seu e-mail"
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
