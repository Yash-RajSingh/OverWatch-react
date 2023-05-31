export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const TOGGLE_UPDATE = "TOGGLE_UPDATE";

export const toggleUpdate = () => ({
  type: TOGGLE_UPDATE,
});
export const toggleSidebar = (isOpen) => ({
  type: TOGGLE_SIDEBAR,
  payload: isOpen,
});
