import {
  SET_ZONE_DATA,
  SET_STORIES_DATA,
  SET_ACTIVE_STORY,
} from "../actions/dataActions";

const initialState = {
  zoneData: [],
  storiesData: [],
  activeStory: [],
};
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ZONE_DATA:
      return {
        ...state,
        zoneData: action.payload,
      };
    case SET_STORIES_DATA:
      return {
        ...state,
        storiesData: action.payload,
      };
    case SET_ACTIVE_STORY:
      return {
        ...state,
        activeStory: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
