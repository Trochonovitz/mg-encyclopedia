import { REMOVE_ITEM, ADD_ITEM, REMOVE_ALL, SEARCH } from '../actions/actions';

const initialState = {
  games: [
    {
      id: '1',
      title: 'GTA V',
      cover:
        'https://www.miastogier.pl/baza/Encyklopedia/gry/GrandTheftAutoV_XBOX_X/Okladka/okl_gta5.jpg',
      premiere: '2021',
      premierePL: '2021',
      platforms: 'Xbox Series X',
      genre: 'Akcja',
      language: 'polskie napisy',
      dev: 'Rockstar North',
      distributor: 'Rockstar Games',
      website: 'www.google.com',
      description:
        'Grand Theft Auto V to kolejna część słynnej gangsterskiej sagi spod szyldu Rockstar Games. Produkcja ponownie wrzuca gracza do gigantycznej, tętniącej życiem metropolii i oferuje mu pokaźną swobodę działań. Tytuł jest przygodową grą akcji, z kamerą ulokowaną z perspektywy trzeciej osoby.',
    },
    {
      id: '2',
      title: 'Red Dead Redemption II',
      cover:
        'https://www.miastogier.pl/baza/Encyklopedia/gry/GrandTheftAutoV_XBOX_X/Okladka/okl_gta5.jpg',
      premiere: '2021',
      premierePL: '2021',
      platforms: 'Xbox Series X',
      genre: 'Akcja',
      language: 'polskie napisy',
      dev: 'Rockstar North',
      distributor: 'Rockstar Games',
      website: 'www.google.com',
      description:
        'Grand Theft Auto V to kolejna część słynnej gangsterskiej sagi spod szyldu Rockstar Games. Produkcja ponownie wrzuca gracza do gigantycznej, tętniącej życiem metropolii i oferuje mu pokaźną swobodę działań. Tytuł jest przygodową grą akcji, z kamerą ulokowaną z perspektywy trzeciej osoby.',
    },
    {
      id: '3',
      title: 'Worms',
      cover:
        'https://www.miastogier.pl/baza/Encyklopedia/gry/GrandTheftAutoV_XBOX_X/Okladka/okl_gta5.jpg',
      premiere: '2021',
      premierePL: '2021',
      platforms: 'Xbox Series X',
      genre: 'Akcja',
      language: 'polskie napisy',
      dev: 'Rockstar North',
      distributor: 'Rockstar Games',
      website: 'www.google.com',
      description:
        'Grand Theft Auto V to kolejna część słynnej gangsterskiej sagi spod szyldu Rockstar Games. Produkcja ponownie wrzuca gracza do gigantycznej, tętniącej życiem metropolii i oferuje mu pokaźną swobodę działań. Tytuł jest przygodową grą akcji, z kamerą ulokowaną z perspektywy trzeciej osoby.',
    },
  ],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_ITEM:
      return {
        games: state.games.filter((item) => item.id !== payload.id),
      };

    case REMOVE_ALL:
      return {
        games: [],
      };

    case ADD_ITEM:
      return {
        games: [...state.games, payload],
      };

    case SEARCH:
      return {
        games: state.games.filter((item) => item.title.includes(payload.item)),
      };

    default:
      return state;
  }
};

export default rootReducer;
