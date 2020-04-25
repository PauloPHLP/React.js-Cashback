import { ADD_USER, FETCH_USERS } from './actionTypes';

const fetchUsers = () => ({
  type: FETCH_USERS
});

const addUser = (newUser) => ({
  type: ADD_USER,
  newUser
});

export const getUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsers());
  };
};

export const createUser = (newUser) => {
  return (dispatch) => {
    dispatch(addUser(newUser));
  };
};
