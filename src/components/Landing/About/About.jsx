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
import Joy from "../../../assets/joy.png";
import ArrowIcon from "../../../assets/arrow.png";
import ShareVector from "../../../assets/share-vector.webp";
import DangerVector from "../../../assets/danger-vector.webp";
import InfoVector from "../../../assets/info-vector.webp";
import { VectorImage } from "../LandingElements";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <AboutContentWrapper>
            <AboutHeading>Let us help each other</AboutHeading>
            <AboutDescription>
              Welcome to our platform, where safety meets community. We provide
              a unique space for users to share information about potential
              risks.
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
                  Make informed decisions about our routes and destinations
                </FeatureDescription>
              </FeatureGridItem>
              <FeatureGridItem grid={"2 / 2 / 3 / 3"}>
                <Arrow src={ArrowIcon} />
              </FeatureGridItem>
            </FeaturesGrid>
            <AboutButton top={"5%"} size={"25%"}>
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
      </AboutContainer>
    </>
  );
};

export default About;
