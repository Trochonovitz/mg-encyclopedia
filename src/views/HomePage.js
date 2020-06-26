import React from 'react';
import styled from 'styled-components';

import Header from '../components/atoms/Header/Header';
import GamesListTemplate from '../templates/GamesListTemplate';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px auto;
  width: 60%;
  background-color: white;
`;

const StyledHeader = styled(Header)`
  width: 22%;

  padding: 20px 0 10px 0;
  margin-left: 20px;

  font-size: 20px;
  border-bottom: 1px solid grey;
`;

const HomePage = () => (
  <StyledWrapper>
    <StyledHeader>Twoja lista życzeń</StyledHeader>
    <GamesListTemplate />
  </StyledWrapper>
);

export default HomePage;
