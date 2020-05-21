import styled from 'styled-components';

//5vh 15vh 10vh 10vh 15vh 20vh;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  grid-template-rows: 10% 25% 5% 15% 15% 20%;
  grid-template-areas:
    'title title img'
    'question link-question img'
    'user-input user-input img'
    'password-input password-input img'
    'remember forgot-password img'
    'login-button login-button img';
`;

export const Title = styled.h1`
  grid-area: title;
  margin: 30px 0 0 150px;
  color: #07889b;
  font-size: 40px;
`;

export const Question = styled.p`
  grid-area: question;
  text-align: right;
  align-self: baseline;
  margin-top: 60px;
`;

export const LinkQuestion = styled.a`
  grid-area: link-question;
  text-align: left;
  align-self: baseline;
  margin-left: 20px;
`;

export const UserInput = styled.input`
  grid-area: user-input;
  justify-self: center;
  align-self: end;
  margin-bottom: 20px;
  width: 400px;
  height: 40px;
  border: 1px solid #07889b;
`;

export const PasswordInput = styled.input`
  grid-area: password-input;
  justify-self: center;
  align-self: top;
  width: 400px;
  height: 40px;
  border: 1px solid #07889b;
`;

export const Remember = styled.div`
  grid-area: remember;
  justify-self: center;
  align-itens: center;
  width: 120px;
  height: 20px;
  margin-left: 50px;
`;

export const Forgot = styled.a`
  grid-area: forgot-password;
  width: 150px;
  height: 20px;
  margin-left: 60px;
`;

export const LoginButton = styled.button`
  grid-area: login-button;
  justify-self: right;
  width: 180px;
  height: 50px;
  margin: 0 150px 150px 0;
  background-color: #07889b;
  border: none;
  color: white;
  font-size: 20px;
`;

export const Img = styled.img`
  grid-area: img;
  opacity: 0.5;
`;

export const Form = styled.form`
  width: 80%;
  height: 60%;
  border: 1px solid #07889b;
`;
