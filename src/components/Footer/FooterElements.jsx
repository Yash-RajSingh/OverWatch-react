import styled from "styled-components";

export const FooterContainer = styled.div`
  /* border: 1px solid black; */
  margin-top: 10%;
  background: var(--mid-pink);
  padding: 1.5rem 1rem 0.5rem;
  width: ${(props) =>
    props.size
      ? `calc(${window.innerWidth}px - 16rem)`
      : `calc(${window.innerWidth}px - 4.5rem)`};
  position: absolute;
  right: 0;
  transition: all 400ms;
  z-index: 0;
`;

export const FooterWrapper = styled.div`
  /* border: 1px solid black; */
`;
export const FooterHeaderWrapper = styled.div`
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  gap: 1%;
  margin-left: 2%;
`;

export const FooterLogo = styled.img`
  width: 2rem;
  background: white;
  border-radius: 50%;
`;

export const FooterHeading = styled.p`
  color: white;
  font-family: "Nunito";
  font-size: 2rem;
  -webkit-text-stroke: 1px black;
`;
export const FooterMotto = styled.p`
  font-size: 2.5rem;
  font-family: "Dancing Script";
  letter-spacing: 0.25rem;
  text-align: center;
  color: var(--dark-pink);
  /* -webkit-text-stroke: 0.5px white; */
  line-height: 1.2;
  margin: 1% auto 2%;
`;

export const Copyright = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 0.9rem;
  font-family: "Nunito";
  font-weight: 600;
`;
