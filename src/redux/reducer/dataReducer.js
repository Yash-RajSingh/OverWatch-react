import { SET_ZONE_DATA } from "../actions/dataActions";

const initialState = {
  zoneData: [],
};
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ZONE_DATA:
      return {
        ...state,
        zoneData: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
