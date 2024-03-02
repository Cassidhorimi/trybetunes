import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`;

export const LoginContent = styled.div`
  max-height: 334px;
  height: 100%;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;

export const LoginForm = styled.form`
  max-height: 282px;
  height: 100%;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
  gap: 24px;
  animation: left 0.5s;
  > button {
    height: 34px;
    width: 100%;
    color: #ffffff;
    background-color: #007aff;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  > label {
    width: 100%;
    text-align: left;
  }
  > input {
    height: 32px;
    width: 100%;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    background-color: #f9f9f9;
    padding-left: 10px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 10px;
  color: red;
  font-weight: 600;
`;
