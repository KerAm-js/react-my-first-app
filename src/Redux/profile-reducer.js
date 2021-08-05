const ADD_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  newPostText: '',
  myPosts: [
    {id: 1, text: "Hello, I use Lists", likeCount: 12},
    {id: 2, text: "How are you, users?", likeCount: 25},
  ],
  profileData: {
    ava: "https://images.unsplash.com/photo-1626682929870-21cfb734281e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
    nick: "Kerimov777",
    fullname: "Amir Kerimov",
    location: "Chechen Republic",
    interest: "Programming, mathematics, logistics, business",
    postsCount: 4,
    friendsCount: 4,
    interestsCount: 10,
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = {...state};
      if (state.newPostText) {
        let newPostText = state.newPostText;
        let newPost = {
          id: 3,
          text: newPostText,
          likeCount: 0,
        };
        stateCopy.myPosts = [...state.myPosts];
        stateCopy.myPosts.push(newPost);        
        stateCopy.newPostText = '';        
      };
      return stateCopy;
    };
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.postText; 
      return stateCopy;
    };
    default: {
      return state;
    };
  };
};

export let addPostActionCreator = () => (
  {type: ADD_POST}
);
export let updateNewPostTextActionCreator = postText => (
  {
    type: UPDATE_NEW_POST_TEXT,
    postText: postText,
  }
);

export default profileReducer;
