import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/actions/sidebarAction";
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
import { getCookies } from "../../hooks/cookies";
import Profile from "../../assets/profile.webp";
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

// const SidebarItem = ({ props }) => {
//   return (
//     <>
//       <SidebarItemWrapper>
//         <MenuItemIcon src={props.element.icon} />
//         <MenuItemLabel onClick={() => props.navigate(`${props.element.path}`)}>
//           {props.element.name}
//         </MenuItemLabel>
//       </SidebarItemWrapper>
//     </>
//   );
// };

const SideBar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const auth =
    JSON.parse(getCookies({ name: "authState" })) ||
    useSelector((state) => state.auth.authStatus);
  const [isOpen, setIsOpen] = useState(isSidebarOpen);
  const [isLogin, setIsLogin] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const path = window.location.href;
  useEffect(() => {
    setIsOpen(false);
    dispatch(toggleSidebar(false));
    window.location.href.includes("login")
      ? setIsLogin(false)
      : setIsLogin(true);
    if (auth !== false) {
      setIsLogin(true);
    }
  }, [path]);

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
                  // <SidebarItem props={{element, navigate}} key={"SidebarItem" + index} />
                  <SidebarItemWrapper>
                    <MenuItemIcon src={element.icon} />
                    <MenuItemLabel onClick={() => navigate(`${element.path}`)}>
                      {element.name}
                    </MenuItemLabel>
                  </SidebarItemWrapper>
                ))}
              </SidebarItemContainer>
              {isLogin ? (
                <UserWrapper onClick={() => navigate("/profile")}>
                  <ProfileIcon src={Profile} />
                  <UserName>{auth.username}</UserName>
                </UserWrapper>
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
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
