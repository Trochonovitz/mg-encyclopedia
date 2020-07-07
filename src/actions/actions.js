export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ALL = 'REMOVE_ALL';
export const SEARCH = 'SEARCH';

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { id },
});

export const removeAll = () => ({
  type: REMOVE_ALL,
});

export const addItem = (itemContent) => {
  const getID = () => Math.random().toString(36).substr(2, 9);
  return {
    type: ADD_ITEM,
    payload: {
      id: getID(),
      ...itemContent,
    },
  };
};

export const searchItem = (item) => ({
  type: SEARCH,
  payload: { item },
});
