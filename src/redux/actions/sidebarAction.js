export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export const toggleSidebar = (isOpen) => ({
  type: TOGGLE_SIDEBAR,
  payload: isOpen
});