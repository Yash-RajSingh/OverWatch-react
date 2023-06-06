import {
  Copyright,
  FooterContainer,
  FooterHeaderWrapper,
  FooterHeading,
  FooterLogo,
  FooterMotto,
  FooterWrapper,
} from "./FooterElements";
import Logo from "../../assets/logo.webp";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AnimationComponent from "../Animation";
const Footer = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const [show, setShow] = useState(true);
  useEffect(() => {
    window.location.href.includes("login") ? setShow(false) : setShow(true);
  }, [window.location.href]);
  return (
    <>
      {show && (
        <AnimationComponent>
          <FooterContainer size={isSidebarOpen}>
            <FooterWrapper>
              <FooterHeaderWrapper>
                <FooterLogo src={Logo} />
                <FooterHeading>OverWatch</FooterHeading>
              </FooterHeaderWrapper>
              <FooterMotto>
                "Safeguarding Every Step: Elevate Your Safety with OverWatch"
              </FooterMotto>
              <Copyright>2023 © All right reserved.</Copyright>
            </FooterWrapper>
          </FooterContainer>
        </AnimationComponent>
      )}
    </>
  );
};

export default Footer;
