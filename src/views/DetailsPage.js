import React from 'react';
import DetailsTemplate from '../templates/DetailsTemplate';

const dummyArticle = {
  id: 1,
  title: 'Hitman 3',
  cover:
    'https://www.miastogier.pl/baza/Encyklopedia/gry/HitmanIII_PC/Okladka/okl_hitman3cover.jpg',
  premiere: 'styczeń 2021',
  premierePL: 'styczeń 2021',
  platforms: 'PC, XONE, XSX, PS4, PS5',
  genre: 'Strzelanka',
  language: 'angielska',
  dev: 'IO Interactive',
  distributor: 'Warner Bros',
  website: 'http://www.hitman.com',
  description:
    'W Returnal wcielamy się w astronautkę, która wpadła w pętlę wydarzenia rozbicia statku, którym podróżowała, na obcej planecie. Za każdym razem kiedy umiera, dochodzi do powtórki, ale zarówno ona jak i planeta zmieniają się. Musi przerwać tn cykl zanim popadnie w totalne szaleństwo.',
};

const DetailsPage = () => (
  <DetailsTemplate
    title={dummyArticle.title}
    cover={dummyArticle.cover}
    premiere={dummyArticle.premiere}
    premierePL={dummyArticle.premierePL}
    platforms={dummyArticle.platforms}
    genre={dummyArticle.genre}
    language={dummyArticle.language}
    dev={dummyArticle.dev}
    distributor={dummyArticle.distributor}
    website={dummyArticle.website}
  />
);

export default DetailsPage;
