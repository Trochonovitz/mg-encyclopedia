import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/molecules/Card/Card';

const DetailsTemplate = ({
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
  <Card
    title={title}
    cover={cover}
    premiere={premiere}
    premierePL={premierePL}
    platforms={platforms}
    genre={genre}
    language={language}
    dev={dev}
    distributor={distributor}
    website={website}
  />
);

DetailsTemplate.propTypes = {
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

DetailsTemplate.defaultProps = {
  cover:
    'https://www.miastogier.pl/baza/Encyklopedia/gry/DEATHLOOP_PS5/Okladka/okl_okl_deathloopcover.jpg',
  website: 'brak',
};

export default DetailsTemplate;
