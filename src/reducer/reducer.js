import { REMOVE_ITEM, ADD_ITEM, REMOVE_ALL } from '../actions/actions';

const initialState = {
  games: [],
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

    default:
      return state;
  }
};

export default rootReducer;
