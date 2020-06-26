import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from '../../atoms/Header/Header';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  height: 55vh;
  width: 40%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.lightGrey};
  border: 1px solid black;

  transform: translate(
    ${({ isVisible }) => (isVisible ? '-50%, -50%' : '200%, -50%')}
  );

  transition: 0.4s ease-in-out;
`;

const StyledButton = styled(Button)`
  width: 40%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
`;

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
`;

const StyledTextArea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  border: none;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;

  width: 60%;
`;

const AddForm = ({ isVisible }) => (
  <StyledWrapper isVisible={isVisible}>
    <StyledHeader>Dodaj nową grę</StyledHeader>
    <Input placeholder="Tytuł" />
    <Input placeholder="Platformy" />
    <Input placeholder="Data premiery" />
    <Input placeholder="Producent" />
    <StyledTextArea placeholder="Opis" />
    <Input placeholder="Link do okładki" />
    <StyledButton type="submit">Dodaj grę</StyledButton>
  </StyledWrapper>
);

AddForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default AddForm;
