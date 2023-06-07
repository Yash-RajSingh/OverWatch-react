import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, toggleUpdate } from "../../redux/actions/sidebarAction";
import {
  IconWrapper,
  MenuIcon,
  MenuItemIcon,
  MenuItemLabel,
  ProfileIcon,
  SideBarWrapper,
  SidebarContainer,
  SidebarItemContainer,
  SidebarItemWrapper,
  UserName,
  UserWrapper,
} from "./SideBarElements";
import { Button } from "../Common/common";
import MenuLight from "../../assets/menu-white.svg";
import MenuDark from "../../assets/menu-black.svg";
import Home from "../../assets/home.svg";
import Alert from "../../assets/alert.svg";
import Info from "../../assets/info.svg";
import Post from "../../assets/send.svg";
import Post2 from "../../assets/book.svg";
import { deleteCookie, getCookies } from "../../hooks/cookies";
import Profile from "../../assets/profile.webp";
import { toast } from "react-toastify";
import { setProfileData } from "../../redux/actions/authActions";
const MenuItems = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "Instructions",
    icon: Info,
    path: "/info",
  },
  {
    name: "Unsafe zones",
    icon: Alert,
    path: "/",
  },
  {
    name: "Stories",
    icon: Post,
    path: "/stories",
  },
  {
    name: "About us",
    icon: Post2,
    path: "/info",
  },
];

const SidebarItem = ({ props }) => {
  let navigate = useNavigate();
  return (
    <>
      <SidebarItemWrapper>
        <MenuItemIcon src={props?.icon} />
        <MenuItemLabel onClick={() => navigate(`${props?.path}`)}>
          {props?.name}
        </MenuItemLabel>
      </SidebarItemWrapper>
    </>
  );
};

const SideBar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const profileData = useSelector((state) => state.auth.isprofileDataOpen);
  const update = useSelector((state) => state.sidebar.update);
  const auth = JSON.parse(getCookies({ name: "authState" }));
  const [isOpen, setIsOpen] = useState(isSidebarOpen);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    setIsOpen(false);
    dispatch(toggleSidebar(false));
    if (window.location.href.includes("login")) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [window.location.href]);

  return (
    <>
      <SidebarContainer color={isOpen} size={isOpen}>
        <SideBarWrapper>
          <IconWrapper>
            <MenuIcon
              src={isOpen ? MenuLight : MenuDark}
              onClick={() => {
                setIsOpen(!isOpen);
                dispatch(toggleSidebar(!isOpen));
              }}
            />
          </IconWrapper>
          {isOpen && (
            <>
              <SidebarItemContainer>
                {MenuItems.map((element, index) => (
                  <SidebarItem props={element} key={"SidebarItem" + index} />
                ))}
              </SidebarItemContainer>
            </>
          )}
          {isOpen && (
            <>
              {isLogin && (
                <>
                  {auth ? (
                    <>
                      <UserWrapper onClick={() => navigate("/profile")}>
                        <ProfileIcon src={Profile} />
                        <UserName>{auth.username}</UserName>
                      </UserWrapper>
                      <div style={{textAlign:"center"}}>
                      <Button
                        top={"10%"}
                        size={"90%"}
                        style={{
                          background: "var(--mid-pink)",
                        }}
                        onClick={()=>{
                          deleteCookie({name:"authState"})
                          dispatch(toggleUpdate(!update));
                          setIsOpen(false);
                          dispatch(toggleSidebar(false));
                          dispatch(setProfileData([]));
                          toast.success("Logged out successfully!")
                          navigate("/")
                          // location.reload()
                        }}
                      >
                        Logout
                      </Button>
                      </div>
                    </>
                  ) : (
                    <UserWrapper>
                      <Button
                        size={"85%"}
                        style={{
                          background: "var(--mid-pink)",
                        }}
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </Button>
                    </UserWrapper>
                  )}
                </>
              )}
            </>
          )}
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
