export const SET_AUTH_DATA = "SET_AUTH_DATA";
export const SET_PROFILE_DATA = "SET_PROFILE_DATA"
export const setAuthData = (data) => ({
  type: SET_AUTH_DATA,
  payload: data,
});

export const setProfileData = (data) =>({
  type: SET_PROFILE_DATA,
  payload: data
})