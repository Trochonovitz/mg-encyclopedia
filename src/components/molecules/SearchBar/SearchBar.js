import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input/Input';
import { searchItem as searchItemAction } from '../../../actions/actions';

const StyledInput = styled(Input)`
  width: 50%;
  background-color: ${({ theme }) => theme.darkBlue};
  margin-top: 10px;
  color: white;
  border: 1px solid white;
`;

class SearchBar extends React.Component {
  state = {
    searchValue: '',
  };

  render() {
    const { searchValue } = this.state;
    const { searchItem } = this.props;

    return (
      <StyledInput
        type="text"
        placeholder="Znajdź grę"
        value={searchValue}
        onChange={(event) => {
          this.setState({ searchValue: event.target.value });
          searchItem(searchValue);
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchItem: (item) => dispatch(searchItemAction(item)),
});

SearchBar.propTypes = {
  searchItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchBar);
