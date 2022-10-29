import styled from 'styled-components';

export const User = styled.p`
  display: flex;
  font-weight: 500;
`;

export const NewContactsList = styled.ul`
  list-style: none;
  margin: 22px 0;
`;

export const ContactEl = styled.li`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
`;

export const ButtonDelete = styled.button`
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
