import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Paragraph from '../../atoms/Paragraph/Paragraph';
import Cover from '../../atoms/Cover/Cover';
import Header from '../../atoms/Header/Header';

const StyledWrapper = styled.div`
  width: 60%;
  margin: 10px auto;
  padding: 20px;

  display: flex;

  background: url('sws-screenshot-reveal-7.jpg');
  background-color: hsla(0, 0%, 100%, 0.7);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
`;

const StyledInfo = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  margin-left: 10px;
`;

const StyledInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 30px;
`;

const Card = ({
  title,
  cover,
  premiere,
  premierePL,
  platforms,
  genre,
  language,
  dev,
  distributor,
  website,
}) => (
  <StyledWrapper>
    <Cover src={cover} />
    <StyledInfo>
      <Header>{title}</Header>
      <StyledInfoBox>
        <Paragraph>Premiera: {premiere}r</Paragraph>
        <Paragraph>Polska premiera:{premierePL}r.</Paragraph>
        <Paragraph>Platformy: {platforms}</Paragraph>
        <Paragraph>Gatunek: {genre}</Paragraph>
        <Paragraph>Język: {language}</Paragraph>
        <Paragraph>Producent: {dev}</Paragraph>
        <Paragraph>Wydawca: {distributor}</Paragraph>
        <Paragraph>
          Strona internetowa: <Link to={website}>wejdź</Link>
        </Paragraph>
        <Paragraph as={Link} to="/">
          Wróć do strony głównej
        </Paragraph>
      </StyledInfoBox>
    </StyledInfo>
  </StyledWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  premiere: PropTypes.string.isRequired,
  premierePL: PropTypes.string.isRequired,
  platforms: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  dev: PropTypes.string.isRequired,
  distributor: PropTypes.string.isRequired,
  website: PropTypes.string,
};

Card.defaultProps = {
  cover:
    'https://www.miastogier.pl/baza/Encyklopedia/gry/DEATHLOOP_PS5/Okladka/okl_okl_deathloopcover.jpg',
  website: 'brak',
};

export default Card;
