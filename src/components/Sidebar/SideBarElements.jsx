import styled from "styled-components";

export const SidebarContainer = styled.div`
  background: ${(props) =>
    props.color ? "var(--dark-pink)" : "var(--white)"};
  width: ${(props) => (props.size ? "15rem" : "3.5rem")};
  height: 100vh;
  padding: 1rem;
  transition: all 400ms;
  position: fixed;  
`;

export const SideBarWrapper = styled.div`
  /* border: 1px solid white; */
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const MenuIcon = styled.img`
  width: 2rem;
  cursor: pointer;
`;
export const SidebarItemContainer = styled.div`
  margin-top: 20%;
  margin-left: 2%;
`;
export const SidebarItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
  margin-top: 12%;
  white-space: nowrap;
  cursor: pointer;
  padding-left: 0.5rem;
  &:hover {
    /* box-shadow: 0 7px 7px -7px rgba(0, 0, 0, 0.664); */
  }
`;
export const MenuItemIcon = styled.img`
  width: 1.5rem;
`;
export const MenuItemLabel = styled.p`
  font-family: "Nunito";
  color: var(--white);
  font-size: 1.25rem;
  transition: all 200ms;
  &:hover {
    font-size: 1.5rem;
  }
`;
