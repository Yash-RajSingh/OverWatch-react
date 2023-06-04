import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/actions/sidebarAction";
import {
  IconWrapper,
  MenuIcon,
  MenuItemIcon,
  MenuItemLabel,
  SideBarWrapper,
  SidebarContainer,
  SidebarItemContainer,
  SidebarItemWrapper,
} from "./SideBarElements";
import { Button } from "../Common/common";
import MenuLight from "../../assets/menu-white.svg";
import MenuDark from "../../assets/menu-black.svg";
import Home from "../../assets/home.svg";
import Alert from "../../assets/alert.svg";
import Info from "../../assets/info.svg";
import Post from "../../assets/send.svg";
import Post2 from "../../assets/book.svg";
import { getCookies } from "../../hooks/cookies";
const MenuItems = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "Instructions",
    icon: Info,
    path: "info",
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
        <MenuItemIcon src={props.icon} />
        <MenuItemLabel onClick={() => navigate(`${props.path}`)}>
          {props.name}
        </MenuItemLabel>
      </SidebarItemWrapper>
    </>
  );
};

const SideBar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const auth =
    JSON.parse(getCookies({ name: "authState" })) ||
    useSelector((state) => state.auth.authStatus);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(isSidebarOpen);
  const [isLogin, setIsLogin] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    setIsOpen(false);
    dispatch(toggleSidebar(false));
    window.location.href.includes("login")
      ? setIsLogin(false)
      : setIsLogin(true);
    if (auth !== false) {
      setIsLogin(false);
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
              {isLogin && (
                <Button
                  top={"50%"}
                  style={{
                    background: "var(--mid-pink)",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              )}
            </>
          )}
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
