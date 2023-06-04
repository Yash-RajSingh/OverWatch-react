import styled from "styled-components";
import LoginBg from "../../assets/login.webp";

export const LoginContainer = styled.div`
  height: 100vh;
  width: ${(props) =>
    props.size ? `calc(100vw - 15rem)` : `calc(100vw - 3.5rem)`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 400ms;
  background-image: url(${LoginBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const LoginWrapper = styled.div`
  border: 1px solid blue;
  width: 20rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const LoginLabel = styled.p`
  color: black;
  font-size: 1.5rem;
  line-height: 1.2;
  font-family: "Nunito";
  font-weight: 600;
  margin-top: 5%;
`;

export const LoginInput = styled.input`
  color: #172b4d;
  margin-top: ${(props) => (props.top ? props.top : "7%")};
  font-size: 1.25rem;
  font-family: "Nunito";
  background: #ebecf073;
  width: 100%;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.188rem;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  &:focus {
    background: white;
  }
`;

export const InfoWrapper = styled.div`
  text-align: center;
`;

export const Link = styled.span`
  color: var(--dark-pink);
  cursor: pointer;
`;
