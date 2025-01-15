import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {signUpSchema, SignUpSchema} from './signUpSchema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      username: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  function onSubmit(formValues: SignUpSchema) {
    console.log(formValues);
    reset({
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
      title: 'Sua conta foi criada com sucesso!',
    });
  }

  return (
    <Screen canGoBack>
      <Text marginBottom="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <FormTextInput
        boxProps={{marginBottom: 's20'}}
        control={control}
        label="Seu username"
        name="username"
        placeholder="@"
      />
      <FormTextInput
        boxProps={{marginBottom: 's20'}}
        control={control}
        label="Nome completo"
        name="fullName"
        placeholder="Digite seu nome completo"
      />
      <FormTextInput
        boxProps={{marginBottom: 's20'}}
        control={control}
        label="E-mail"
        name="email"
        placeholder="Digite seu e-mail"
      />
      <FormPasswordInput
        boxProps={{marginBottom: 's48'}}
        control={control}
        label="Senha"
        name="password"
        placeholder="Digite sua senha"
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmit)}
        title="Criar uma conta"
      />
    </Screen>
  );
}
