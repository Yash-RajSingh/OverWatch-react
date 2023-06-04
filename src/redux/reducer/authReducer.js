import { SET_AUTH_DATA, SET_PROFILE_DATA } from "../actions/authActions";

const initialState = {
  authStatus: false,
  profileData:[]
}
const authReducer = (state = initialState, action) =>{
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        authStatus: action.payload,
      };
      case SET_PROFILE_DATA:
        return{
          ...state,
          profileData: action.payload
        }
    default:
      return state;
  }
}

export default authReducer;