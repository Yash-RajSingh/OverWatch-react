import styled from "styled-components";
import { MapContainerHeading } from "../../MapComponent/MapComponentElements";
import { Button } from "../../Common/common";

export const AboutContainer = styled.div`
  /* border: 1px solid black; */
  margin-top: 10%;
  background: var(--light-pink);
  padding: 2rem 1rem;
`;

export const AboutHeading = styled(MapContainerHeading)``;
export const AboutWrapper = styled.div`
  display: flex;
`;
export const AboutContentWrapper = styled.div`
  /* border: 1px solid black; */
  width: 50%;
`;
export const AboutDescription = styled.p`
  font-size: 1.125rem;
  color: grey;
  margin-top: 2%;
  font-family: "Nunito";
  width: 75%;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  /* border: 1px solid red; */
  /* width: 80%; */
  margin-top: 5%;
  column-gap: 1rem;
  row-gap: 2rem;
`;
export const FeatureGridItem = styled.div`
  /* border: 1px solid blue; */
  grid-area: ${(props) => props.grid};
`;

export const FeatureHeading = styled.p`
  color: black;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: "Poppins";
`;
export const FeatureDescription = styled.p`
  color: grey;
  font-size: 1rem;
  margin-top: 2%;
  line-height: 1.2;
  font-family: "Nunito";
  width: 90%;
`;
export const Arrow = styled.img`
  width: 50%;
  transform: rotate(20deg);
  /* margin-top: 5%; */
`;

export const AboutImageWrapper = styled.div`
  /* border: 1px solid black; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutImage = styled.img`
  width: 70%;
  background: var(--mid-pink);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem 0;
`;
export const AboutButton = styled(Button)`
  margin-left: 10%;
`;
