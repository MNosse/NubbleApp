import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {signUpSchema, SignUpSchema} from './signUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps) {
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
