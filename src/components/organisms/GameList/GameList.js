import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from '../../../actions/actions';

import Header from '../../atoms/Header/Header';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Cover from '../../atoms/Cover/Cover';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 15px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
`;

const StyledGameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const StyledHeader = styled(Header)`
  font-size: 20px;
  cursor: pointer;

  :active {
    color: ${({ theme }) => theme.lightGrey};
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: grey;
  font-size: 13.6px;

  ::after {
    content: '●';
    padding: 0 5px;
  }
`;

const StyledDetails = styled.div`
  display: flex;
`;

const StyledHeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

class GameList extends React.Component {
  state = {
    redirect: false,
  };

  detailView = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      title,
      premiere,
      platforms,
      dev,
      cover,
      description,
      removeItem,
    } = this.props;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/${id}`} />;
    }

    return (
      <StyledWrapper>
        <Cover src={cover} />

        <StyledGameInfoWrapper>
          <StyledHeaderInfo>
            <StyledHeader onClick={this.detailView}>{title}</StyledHeader>
            <Button onClick={() => removeItem(id)}>Usuń</Button>
          </StyledHeaderInfo>

          <StyledDetails>
            <StyledParagraph>{platforms}</StyledParagraph>
            <StyledParagraph>{premiere}</StyledParagraph>
            <StyledParagraph>{dev}</StyledParagraph>
          </StyledDetails>

          <Paragraph>{description}</Paragraph>
        </StyledGameInfoWrapper>
      </StyledWrapper>
    );
  }
}

GameList.propTypes = {
  title: PropTypes.string.isRequired,
  premiere: PropTypes.string.isRequired,
  platforms: PropTypes.string.isRequired,
  dev: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  id: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
});

export default connect(null, mapDispatchToProps)(GameList);
