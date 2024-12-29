import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';

export function LoginScreen() {
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
      <TextInput
        boxProps={{marginBottom: 's10'}}
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon color="gray2" name="eyeOn" />}
      />
      <Text bold color="primary" preset="paragraphSmall">
        Esqueci minha senha
      </Text>
      <Button marginTop="s48" title="Entrar" />
      <Button marginTop="s12" preset="outline" title="Criar uma conta" />
    </Screen>
  );
}
