import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import GameList from '../components/organisms/GameList/GameList';
import Header from '../components/atoms/Header/Header';

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  align-content: center;

  padding: 20px 0 10px 0;
  border-bottom: 1px solid grey;
`;

const GamesListTemplate = ({ games }) => (
  <>
    {games.length ? (
      games.map((game) => <GameList key={game.id} {...game} />)
    ) : (
      <StyledHeader>Nic tu ni mo. Dodaj coś</StyledHeader>
    )}
  </>
);

const mapStateToProps = (state) => {
  const { games } = state;
  return { games };
};

GamesListTemplate.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(GamesListTemplate);
