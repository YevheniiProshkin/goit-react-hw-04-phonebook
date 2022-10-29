import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  margin: 12px;
`;

export const InputForm = styled.input`
  display: block;
  font-weight: 500;
  font-size: 18px;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 25px;
  padding: 16px 35px;
  box-shadow: 1px 2px 43px 0px rgba(93, 167, 171, 1);
`;

export const ButtonAdd = styled.button`
  font-weight: 700;
  text-align: center;
  font-size: 18px;
  border-radius: 25px;
  margin: 25px;
  padding: 16px 35px;
  color: #ffffff;
  background: #4f7582;
  transition: 500ms;
  border: none;
  :hover {
    background: #33a6d4;
    color: #121111;
    box-shadow: 1px 2px 43px 0px rgba(93, 167, 171, 1);
  }
`;
