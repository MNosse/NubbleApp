import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';

export function SignUpScreen() {
  function submitForm() {
    // TODO: implementar
  }

  return (
    <Screen canGoBack>
      <Text marginBottom="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <TextInput
        boxProps={{marginBottom: 's20'}}
        label="Seu username"
        placeholder="@"
      />
      <TextInput
        boxProps={{marginBottom: 's20'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
      />
      <TextInput
        boxProps={{marginBottom: 's20'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <TextInput
        boxProps={{marginBottom: 's48'}}
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon color="gray2" name="eyeOn" />}
      />
      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  );
}
