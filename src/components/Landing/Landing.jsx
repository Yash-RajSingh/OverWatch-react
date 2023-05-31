import {
  ArrowImage,
  LandingContainer,
  LandingContentWrapper,
  LandingDescription,
  LandingImage,
  LandingImageWrapper,
  LandingMotto,
  LandingWrapper,
} from "./LandingElements";
import Arrow from "../../assets/arrow2.png";
import PointLeft from "../../assets/point-left.png";
import PointLeft2 from "../../assets/point-left2.jpg";
import PointLeft3 from "../../assets/landing.jpg";
import { Button } from "../Common/common";
const Landing = () => {
  return (
    <>
      <LandingContainer>
        <LandingWrapper>
          <LandingContentWrapper>
            <LandingMotto>Your Protection is our Confidence</LandingMotto>
            <LandingDescription>
              Protecting Lives, One Zone at a Time: Safeguarding Communities
              through Interactive Danger Mapping.
            </LandingDescription>
            <Button size={"10rem"} top={"5%"}>
              Get Started
            </Button>
          </LandingContentWrapper>
          <LandingImageWrapper>
            <ArrowImage src={Arrow} />
            <LandingImage src={PointLeft2} />
            <LandingImage src={PointLeft3} top={"20%"} />
          </LandingImageWrapper>
        </LandingWrapper>
      </LandingContainer>
    </>
  );
};

export default Landing;
