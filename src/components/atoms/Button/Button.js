import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  width: 10%;

  background-color: ${({ theme }) => theme.darkBlue};
  color: white;

  padding: 3px;
  border: none;
  cursor: pointer;

  :active {
    background-color: ${({ theme }) => theme.lightBlue};
  }
`;

export default Button;
