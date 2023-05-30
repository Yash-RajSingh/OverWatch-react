import { TOGGLE_SIDEBAR, TOGGLE_UPDATE } from "../actions/sidebarAction";

const initialState = {
  isOpen: false,
  update: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: action.payload,
      };
    case TOGGLE_UPDATE:
      return {
        ...state,
        update: !state.update,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
