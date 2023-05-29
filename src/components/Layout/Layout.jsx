import styled from "styled-components";
import SideBar from "../Sidebar/SideBar";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
const Pseudobody = styled.div`
  /* border: 1px solid yellow; */
  width: ${(props) =>
    props.size
      ? `calc(${window.innerWidth}px - 15rem)`
      : `calc(${window.innerWidth}px - 3.5rem)`};
  transition: all 400ms;
  margin-left: auto;
`;
const Layout = (props) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <>
      <SideBar />
      <Pseudobody size={isSidebarOpen}>
        <Header />
        {props.children}
      </Pseudobody>
    </>
  );
};

export default Layout;
