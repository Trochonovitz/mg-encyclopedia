import React from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button/Button';
import AddForm from '../../organisms/AddForm/AddForm';

const StyledNavigation = styled.div`
  height: 100px;
  background: linear-gradient(
    ${({ theme }) => theme.lightBlue} 50%,
    ${({ theme }) => theme.darkBlue} 50%
  );
  color: white;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  height: 30%;

  padding: 5px;
  border-radius: 5px;

  margin-right: 10px;
  margin-top: 10px;

  cursor: pointer;
  color: white;
  border: none;

  background-color: ${({ theme }) => theme.lightBlue};

  &:hover {
    background-color: ${({ theme }) => theme.darkBlue};
    transition: 0.3s ease-in-out;
  }
`;

class Navbar extends React.Component {
  state = {
    visibleAddForm: false,
  };

  handleClickAddForm = () => {
    this.setState((prevState) => ({
      visibleAddForm: !prevState.visibleAddForm,
    }));
  };

  render() {
    const { visibleAddForm } = this.state;

    return (
      <StyledNavigation>
        <StyledButton onClick={this.handleClickAddForm}>Dodaj grę</StyledButton>
        <StyledButton>Zaznacz wszystkie</StyledButton>

        <AddForm isVisible={visibleAddForm} />
      </StyledNavigation>
    );
  }
}

export default Navbar;
