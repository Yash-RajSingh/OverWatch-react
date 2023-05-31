export const SET_ZONE_DATA = "SET_ZONE_DATA";
export const SET_STORIES_DATA = "SET_STORIES_DATA";
export const SET_ACTIVE_STORY = "SET_ACTIVE_STORY";

export const setZoneData = (data) => ({
  type: SET_ZONE_DATA,
  payload: data,
});

export const setStoriesData = (data) => ({
  type: SET_STORIES_DATA,
  payload: data,
});
export const setActiveStory = (data) => ({
  type: SET_ACTIVE_STORY,
  payload: data,
});
