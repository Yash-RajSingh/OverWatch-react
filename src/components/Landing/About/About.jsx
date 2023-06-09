import {
  AboutButton,
  AboutContainer,
  AboutContentWrapper,
  AboutDescription,
  AboutHeading,
  AboutImage,
  AboutImageWrapper,
  AboutWrapper,
  Arrow,
  FeatureDescription,
  FeatureGridItem,
  FeatureHeading,
  FeaturesGrid,
} from "./AboutElements";
import Joy from "../../../assets/joy.webp";
import ArrowIcon from "../../../assets/arrow.webp";
import ShareVector from "../../../assets/share-vector.webp";
import DangerVector from "../../../assets/danger-vector.webp";
import InfoVector from "../../../assets/info-vector.webp";
import { VectorImage } from "../LandingElements";
import { useNavigate } from "react-router-dom";
import AnimationComponent from "../../Animation";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <AboutContainer>
        <AnimationComponent>
          <AboutWrapper>
            <AboutContentWrapper>
              <AboutHeading>Let us help each other</AboutHeading>
              <AboutDescription>
                Welcome to{" "}
                <span style={{ fontWeight: 600, color: "black" }}>
                  OverWatch
                </span>
                , where safety meets community. We provide a unique space for
                users to share information about potential risks.
              </AboutDescription>
              <FeaturesGrid>
                <FeatureGridItem grid={"1 / 1 / 2 / 2"}>
                  <FeatureHeading>Mark Danger Zones</FeatureHeading>
                  <FeatureDescription>
                    Mark and share danger zones on an interactive map
                  </FeatureDescription>
                </FeatureGridItem>
                <FeatureGridItem grid={"1 / 2 / 2 / 3"}>
                  <FeatureHeading>Share Experiences</FeatureHeading>
                  <FeatureDescription>
                    Share your experiences and contribute to a benefit for all.
                  </FeatureDescription>
                </FeatureGridItem>
                <FeatureGridItem grid={"2 / 1 / 3 / 2"}>
                  <FeatureHeading>Safer Navigation</FeatureHeading>
                  <FeatureDescription>
                    Make informed decisions about ypur routes and destinations
                  </FeatureDescription>
                </FeatureGridItem>
                <FeatureGridItem grid={"2 / 2 / 3 / 3"}>
                  <Arrow src={ArrowIcon} />
                </FeatureGridItem>
              </FeaturesGrid>
              <AboutButton
                top={"5%"}
                size={"25%"}
                onClick={() => navigate("/login")}
              >
                Join us
              </AboutButton>
            </AboutContentWrapper>
            <AboutImageWrapper>
              <VectorImage src={InfoVector} right={"40%"} top={"-20%"} />
              <VectorImage src={DangerVector} right={"40%"} top={"20%"} />
              <VectorImage src={ShareVector} right={"6.5%"} />
              <AboutImage src={Joy} />
            </AboutImageWrapper>
          </AboutWrapper>
        </AnimationComponent>
      </AboutContainer>
    </>
  );
};

export default About;
