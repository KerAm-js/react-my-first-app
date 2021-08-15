const TO_FOLLOW = 'TO-FOLLOW';
const TO_UNFOLLOW = 'TO-UNFOLLOW';
const SET_USERS_LIST = 'SET-USERS-LIST';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_CURRENT_PAGE_NUMBERS = 'SET_CURRENT_PAGE_NUMBERS';
const SET_PAGE_NUMBERS = 'SET_PAGE_NUMBERS';
const SET_NEXT_CURRENT_PAGE_NUMBERS = 'SET-NEXT-CURRENT-PAGE-NUMBERS'
const SET_PREVIOUS_CURRENT_PAGE_NUMBERS = 'SET-PREVIOUS-CURRENT-PAGE-NUMBERS'



let initialState = {
  usersList: [],
  totalCount: 0,
  pageSize: 10,
  currentPage: 1,
  pageNumbers: [],
  currentPageNumbers: [],
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case TO_FOLLOW: 
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
    
    case TO_UNFOLLOW: 
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

    case SET_USERS_LIST: 
      console.log(SET_USERS_LIST);
      return {
        ...state,
        usersList: [...action.usersList],
      };
    
    case SET_TOTAL_COUNT:
      console.log(SET_TOTAL_COUNT);
      return {
        ...state,
        totalCount: action.totalCount,
      };
    
    case SET_CURRENT_PAGE:
      console.log(SET_CURRENT_PAGE)
      return {
        ...state,
        currentPage: action.currentPage,
      };
    
    case SET_CURRENT_PAGE_NUMBERS:
      console.log(SET_CURRENT_PAGE_NUMBERS)
      return {
        ...state,
        currentPageNumbers: action.currentPageNumbers,
      };
    
    case SET_NEXT_CURRENT_PAGE_NUMBERS:
      console.log(SET_NEXT_CURRENT_PAGE_NUMBERS)
      let nextCount = state.currentPageNumbers[0] + 9;
      let nextCurrentPageNumbers = [];

      while (nextCurrentPageNumbers.length < 10) {
        if (state.pageNumbers[nextCount]) {
          nextCurrentPageNumbers.push(state.pageNumbers[nextCount]);
        };
        nextCount += 1;
      };
      
      return {
        ...state,
        currentPageNumbers: [...nextCurrentPageNumbers],
      };

    case SET_PREVIOUS_CURRENT_PAGE_NUMBERS:
      console.log(SET_PREVIOUS_CURRENT_PAGE_NUMBERS)
      let previousCount = state.currentPageNumbers[0] - 11;
      let previousCurrentPageNumbers = [];

      if (previousCount >= 0) {
        while (previousCurrentPageNumbers.length < 10) {
          if (state.pageNumbers[previousCount]) {
            previousCurrentPageNumbers.push(state.pageNumbers[previousCount]);
          };
          previousCount += 1;
        };
      } else {
        return state;
      };

      return {
        ...state,
        currentPageNumbers: [...previousCurrentPageNumbers],
      };

    case SET_PAGE_NUMBERS: 
      console.log(SET_PAGE_NUMBERS)
      return {
        ...state,
        pageNumbers: action.pageNumbers,
      };

    default: 
      return state;
    
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
export const setUsersListAC = (users) => {
  return {
    type: SET_USERS_LIST,
    usersList: users,
  };
};
export const setTotalCountAC = totalCount => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount,
  };
};
export const setCurrentPageAC = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setCurrentPageNumbersAC = currentPageNumbers => {
  return {
    type: SET_CURRENT_PAGE_NUMBERS,
    currentPageNumbers,
  };
};
export const setPageNumbersAC = pageNumbers => {
  return {
    type: SET_PAGE_NUMBERS,
    pageNumbers,
  };
};
export const setNextCurrentPageNumbersAC = () => {
  return {
    type: SET_NEXT_CURRENT_PAGE_NUMBERS,
  };
};
export const setPreviousCurrentPageNumbersAC = () => {
  return {
    type: SET_PREVIOUS_CURRENT_PAGE_NUMBERS,
  };
};

export default usersReducer;
