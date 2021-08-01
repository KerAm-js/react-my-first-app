const ADD_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: 
      if (state.newPostText) {
        let newPostText = state.newPostText;
        let newPost = {
          id: 3,
          text: newPostText,
          likeCount: 0,
        };
        state.myPosts.push(newPost);        
        state.newPostText = '';        
      };
      return state
    case UPDATE_NEW_POST_TEXT: 
      state.newPostText = action.postText; 
      return state
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
