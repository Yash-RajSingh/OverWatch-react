import styled from "styled-components";

export const InfoContainer = styled.div`
  /* border: 1px solid black; */
  margin-top: 10%;
  margin-left: auto;
`;

export const InfoHeading = styled.p`
  font-size: 2.5rem;
  font-family: "Nunito";
  text-align: center;
  width: 70%;
  margin: 0 auto;
  font-weight: 600;
  line-height: 1.3;
`;

export const InfoText = styled.p`
  color: gray;
  font-size: 1.35rem;
  font-family: "Nunito";
  text-align: center;
  width: 70%;
  margin: 1% auto 2%;
`;

export const Square = styled.div`
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  margin-left: ${(props) => (props.color ? "" : "8%")};
  right: ${(props) => (props.color ? "5%" : "")};
  margin-top: ${(props) => (props.color ? "7%" : "")};
  position: ${(props) => (props.color ? "absolute" : "")};
  border-width: 5px;
  border-style: solid;
  border-image: ${(props) =>
    props.color
      ? "linear-gradient(to right, #1b6f0c, #32cc84) 1"
      : "linear-gradient(to right, #6f0c32, #cc3232) 1"};
`;
