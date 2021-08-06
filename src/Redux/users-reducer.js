const TO_FOLLOW = 'TO-FOLLOW';
const TO_UNFOLLOW = 'TO-UNFOLLOW';
const GET_USERS_LIST = 'GET-USERS-LIST';

let initialState = {
  usersList: [],
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case TO_FOLLOW: {
      return {
        ...state,
        usersList: state.usersList.map((user,index) => {
          if (index === action.id) {
            return {
              ...user,
              followed: true,
            };
          };
          return user
        }),
      };
    };
    case TO_UNFOLLOW: {
      return {
        ...state,
        usersList: state.usersList.map((user,index) => {
          if (index === action.id) {
            return {
              ...user,
              followed: false,
            };
          };
          return user
        }),
      };
    };
    case GET_USERS_LIST: {
      return {...state,
      usersList: [...action.usersList],
      };
    }
    default: {
      return state;
    };
  };
};

export const toFollowAC = number => (
  {
    type: TO_FOLLOW,
    id: number,
  }
);
export const toUnFollowAC = (id) => {
  return {
    type: TO_UNFOLLOW,
    id: id,
  };
};
export const getUsersListAC = (users) => {
  return {
    type: GET_USERS_LIST,
    usersList: users,
  };
};

export default usersReducer;
