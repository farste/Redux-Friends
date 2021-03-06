import {
  GETTING_FRIENDS,
  GET_FRIENDS,
  CREATING_FRIEND,
  CREATED_FRIEND,
  ERROR
} from "../actions";

const initialState = {
  friends: [],
  gettingFriends: false,
  creatingFriend: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_FRIENDS:
      return { ...state, gettingFriends: true };
    case GET_FRIENDS:
      return { ...state, friends: action.payload, gettingFriends: false };
    case CREATING_FRIEND:
      return { ...state, creatingFriend: true };
    case CREATED_FRIEND:
      return { ...state, friends: action.payload, creatingFriend: false };
    case ERROR:
      return {
        ...state,
        gettingFriends: false,
        creatingFriend: false,
        error: action.payload
      };
      default:
      return state;
  }
};
