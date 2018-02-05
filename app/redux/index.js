import { createStore } from 'redux';

const defaultState = {
  email: 'a@gmail.com',
  password: '123456',
  name: 'Nguyen Thi A'
};

const reducer = (state = defaultState, action) => {
  return state;
};

export const store = createStore(reducer);
