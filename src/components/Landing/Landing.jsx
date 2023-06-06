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
import Arrow from "../../assets/arrow2.webp";
import PointLeft2 from "../../assets/point-left2.webp";
import PointLeft3 from "../../assets/landing.webp";
import { Button } from "../Common/common";
import { useNavigate } from "react-router-dom";
import AnimationComponent from "../Animation";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <LandingContainer>
        <AnimationComponent>
          <LandingWrapper>
            <LandingContentWrapper>
              <LandingMotto>Your Protection is our Confidence</LandingMotto>
              <LandingDescription>
                Protecting Lives, One Zone at a Time: Safeguarding Communities
                through Interactive Danger Mapping.
              </LandingDescription>
              <Button
                size={"10rem"}
                top={"5%"}
                onClick={() => navigate("/login")}
              >
                Get Started
              </Button>
            </LandingContentWrapper>
            <LandingImageWrapper>
              <ArrowImage src={Arrow} />
              <LandingImage src={PointLeft2} />
              <LandingImage src={PointLeft3} top={"20%"} />
            </LandingImageWrapper>
          </LandingWrapper>
        </AnimationComponent>
      </LandingContainer>
    </>
  );
};

export default Landing;
