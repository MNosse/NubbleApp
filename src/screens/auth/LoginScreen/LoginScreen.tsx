import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {RootStackParamList} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function onSubmit({email, password}: LoginSchema) {
    console.log(email, password);
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        boxProps={{marginBottom: 's20'}}
        control={control}
        label="E-mail"
        name="email"
        placeholder="Digite seu e-mail"
      />
      <FormPasswordInput
        boxProps={{marginBottom: 's10'}}
        control={control}
        label="Senha"
        name="password"
        placeholder="Digite sua senha"
      />
      <Text
        bold
        color="primary"
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall">
        Esqueci minha senha
      </Text>
      <Button
        disabled={!formState.isValid}
        marginTop="s48"
        onPress={handleSubmit(onSubmit)}
        title="Entrar"
      />
      <Button
        marginTop="s12"
        onPress={navigateToSignUpScreen}
        preset="outline"
        title="Criar uma conta"
      />
    </Screen>
  );
}
