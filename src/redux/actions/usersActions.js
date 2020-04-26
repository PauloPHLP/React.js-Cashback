import { ADD_USER, FETCH_USERS, UPDATE_USER } from './actionTypes';

const addUser = (newUser) => ({
  type: ADD_USER,
  newUser
});

const fetchUsers = () => ({
  type: FETCH_USERS
});

const updateUser = (newUserInfo) => ({
  type: UPDATE_USER,
  updatedUser: newUserInfo
});

export const createUser = (newUser) => {
  return (dispatch) => {
    dispatch(addUser(newUser));
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsers());
  };
};

export const updateUserData = (updatedUser) => {
  return (dispatch) => {
    dispatch(updateUser(updatedUser));
  };
};
