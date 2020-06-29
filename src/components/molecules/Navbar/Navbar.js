import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { removeAll as removeAllAction } from '../../../actions/actions';

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

    const { removeAll } = this.props;

    return (
      <StyledNavigation>
        <StyledButton onClick={this.handleClickAddForm}>Dodaj grę</StyledButton>
        <StyledButton onClick={() => removeAll()}>Usuń wszystkie</StyledButton>

        <AddForm isVisible={visibleAddForm} />
      </StyledNavigation>
    );
  }
}

Navbar.propTypes = {
  removeAll: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeAll: () => dispatch(removeAllAction()),
});

export default connect(null, mapDispatchToProps)(Navbar);
