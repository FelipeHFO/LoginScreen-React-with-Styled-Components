import React from 'react';

import '../../global/style.css';

import * as S from './styled';

function Login() {
  return (
    <S.Form>
      <S.Wrapper>
        <S.Title>Entrar</S.Title>

        <S.Question>Você ainda não possui conta?</S.Question>

        <S.LinkQuestion href="http://localhost:3000/">
          Crie sua conta clicando aqui!
        </S.LinkQuestion>

        <S.UserInput placeholder="Digite seu usuário aqui!" />

        <S.PasswordInput placeholder="Digite sua senha!" />

        <S.Remember>
          <input type="checkbox" />
          <span>Lembrar-me</span>
        </S.Remember>

        <S.Forgot href="http://localhost:3000/">Esqueceu sua senha?</S.Forgot>

        <S.LoginButton>Entrar</S.LoginButton>

        <S.Img src={require('../../assets/background.png')} alt="background" />
      </S.Wrapper>
    </S.Form>
  );
}

export default Login;
