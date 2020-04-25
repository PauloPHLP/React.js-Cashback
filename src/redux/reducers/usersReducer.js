import { ADD_USER, FETCH_USERS } from '../actions/actionTypes';

const initialState = {
  users: [
    {
      name: 'Paulo Lima',
      cpf: '111.625.249-01',
      email: 'p.pereira@cinq.com.br',
      password: 'phlp@1212'
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

    default:
      return state;
  }
};
