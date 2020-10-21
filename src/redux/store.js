import { createStore } from 'redux';

const initialState = { nameLang: 'Ru' };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Ru':
      return { nameLang: (state.nameLang = action.payload) }; //либо вместо action.payload ру и ниже ен
    case 'En':
      return { nameLang: (state.nameLang = action.payload) };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
