import { ADD_USER, FETCH_USERS, UPDATE_USER } from '../actions/actionTypes';

const initialState = {
  users: [
    {
      name: 'Paulo Lima',
      cpf: '111.625.249-01',
      email: 'p.pereira@cinq.com.br',
      password: 'phlp@1212',
      credits: 0
    }
  ]
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: (state.users || []).concat([action.newUser])
      };

    case FETCH_USERS:
      return {
        users: state.users
      };

    case UPDATE_USER:
      return {
        users: state.users.map((user) =>
          user.email !== action.updatedUser.email ? user : action.updatedUser
        )
      };

    default:
      return state;
  }
};
