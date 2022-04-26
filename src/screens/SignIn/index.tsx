import React from 'react';

import { Container, Account, Title, Subtitle, Header, Logo } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import LogoPng from '../../assets/emflogo.png';


export function SignIn() {
  return (
    <Container>

      <Header>
        <Logo source={LogoPng}/>
      </Header>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
      />

      <Input
        placeholder="senha"
        secureTextEntry
      />

      <Button title="Entrar" onPress={() => { }} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={() => { }} />
        <ButtonText title="Criar minha conta" onPress={() => { }} />
      </Account>
    </Container>
  );
}