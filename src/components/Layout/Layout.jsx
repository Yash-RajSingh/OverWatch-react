import styled from "styled-components";
import SideBar from "../Sidebar/SideBar";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
const Pseudobody = styled.div`
  /* border: 1px solid red; */
  width: ${(props) =>
    props.size
      ? `calc(${window.innerWidth}px - 16.5rem)`
      : `calc(${window.innerWidth}px - 5rem)`};
  transition: all 400ms;
  margin-left: auto;
  padding: 0 1rem;
`;
const Layout = (props) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <SideBar />
      <Pseudobody size={isSidebarOpen}>
        <Header />
        {props.children}
      </Pseudobody>
    </>
  );
};

export default Layout;
