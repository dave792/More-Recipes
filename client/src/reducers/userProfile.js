import { GET_USER_PROFILE, EDIT_USER_PROFILE } from '../actions/actionTypes';

const initialState = {
  fullname: '',
  username: '',
  email: '',
  joined: ''
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
  case GET_USER_PROFILE:
    return {
      ...state,
      ...action.user
    };
  case EDIT_USER_PROFILE:
    return {
      ...state,
      ...action.user
    };
  default:
    return state;
  }
};

export default userProfile;
