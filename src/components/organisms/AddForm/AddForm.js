import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

import { connect } from 'react-redux';
import { addItem as addItemAction } from '../../../actions/actions';

import Header from '../../atoms/Header/Header';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  height: 70vh;
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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60%;
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

const AddForm = ({ isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible}>
    <StyledHeader>Dodaj nową grę</StyledHeader>
    <Formik
      initialValues={{
        title: '',
        cover: '',
        premiere: '',
        premierePL: '',
        platforms: '',
        genre: '',
        language: '',
        dev: '',
        distributor: '',
        website: '',
        description: '',
      }}
      onSubmit={(values) => addItem(values)}
    >
      {() => (
        <StyledForm>
          <Input as={Field} placeholder="Tytuł" name="title" />
          <Input as={Field} placeholder="Platformy" name="platforms" />
          <Input as={Field} placeholder="Gatunek" name="genre" />
          <Input as={Field} placeholder="Język" name="language" />
          <Input as={Field} placeholder="Data premiery" name="premiere" />
          <Input
            as={Field}
            placeholder="Data polskiej premiery"
            name="premierePL"
          />
          <Input as={Field} placeholder="Producent" name="dev" />
          <Input as={Field} placeholder="Wydawca" name="distributor" />
          <Input as={Field} placeholder="Opis" name="description" />
          <Input as={Field} placeholder="Link do okładki" name="cover" />
          <Input
            as={Field}
            placeholder="Link strony internetowej"
            name="website"
          />
          <StyledButton type="submit">Dodaj grę</StyledButton>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

AddForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(AddForm);
