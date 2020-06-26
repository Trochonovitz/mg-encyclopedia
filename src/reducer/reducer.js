import { REMOVE_ITEM } from '../actions/actions';

const initialState = {
  games: [
    {
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
    },
    {
      id: 2,
      title: 'Star Wars: Squadrons',
      cover:
        'https://www.miastogier.pl/baza/Encyklopedia/gry/StarWarsSquadrons_XBOXONE/Okladka/okl_starwarssquadrons203.jpg',
      premiere: '02 października 2020',
      premierePL: '02 października 2020',
      platforms: 'PC, XONE, PS4',
      genre: 'Strzelanka',
      language: 'polskie napisy',
      dev: 'EA Motive',
      distributor: 'EA',
      website: 'http://www.ea.com/games/starwars/squadrons',
      description:
        'W Returnal wcielamy się w astronautkę, która wpadła w pętlę wydarzenia rozbicia statku, którym podróżowała, na obcej planecie. Za każdym razem kiedy umiera, dochodzi do powtórki, ale zarówno ona jak i planeta zmieniają się. Musi przerwać tn cykl zanim popadnie w totalne szaleństwo.',
    },
    {
      id: 3,
      title: 'Remnant: From the Ashes - Subject 2923',
      cover:
        'https://www.miastogier.pl/baza/Encyklopedia/gry/RemnantFromtheAshesSubject2923_XBOXONE/Okladka/okl_remnantsubject2923dlccover.jpg',
      premiere: '20 sierpnia 2020',
      premierePL: '20 sierpnia 2020',
      platforms: 'PC, XONE, PS4',
      genre: 'Akcja / RPG',
      language: 'angielska',
      dev: 'Gunfire Games',
      distributor: 'Perfect World',
      website: 'http://google.com',
      description:
        'W Returnal wcielamy się w astronautkę, która wpadła w pętlę wydarzenia rozbicia statku, którym podróżowała, na obcej planecie. Za każdym razem kiedy umiera, dochodzi do powtórki, ale zarówno ona jak i planeta zmieniają się. Musi przerwać tn cykl zanim popadnie w totalne szaleństwo.',
    },
    {
      id: 4,
      title: 'Cyberpunk 2077',
      cover:
        'https://www.miastogier.pl/baza/Encyklopedia/gry/Cyberpunk2077_XBOXONE/Okladka/okl_cyberxone.jpg',
      premiere: '20 sierpnia 2020',
      premierePL: '20 sierpnia 2020',
      platforms: 'PC, XONE, PS4',
      genre: 'Akcja / RPG',
      language: 'angielska',
      dev: 'Gunfire Games',
      distributor: 'Perfect World',
      website: 'http://google.com',
      description:
        'W Returnal wcielamy się w astronautkę, która wpadła w pętlę wydarzenia rozbicia statku, którym podróżowała, na obcej planecie. Za każdym razem kiedy umiera, dochodzi do powtórki, ale zarówno ona jak i planeta zmieniają się. Musi przerwać tn cykl zanim popadnie w totalne szaleństwo.',
    },
  ],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_ITEM:
      return {
        ...state,
        games: state.games.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};

export default rootReducer;
