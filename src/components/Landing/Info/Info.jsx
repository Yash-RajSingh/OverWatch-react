import AnimationComponent from "../../Animation";
import { InfoContainer, InfoHeading, InfoText, Square } from "./InfoElements";
import StatCounter from "./StatCounter";

const Info = () => {
  return (
    <>
      <AnimationComponent>
        <InfoContainer>
          <Square />
          <Square color />
          <InfoHeading>
            Safety in Your Hands: Experience the Next Generation Public Safety
            Solution.
          </InfoHeading>
          <InfoText>
            We envision a safer world for all. Startling statistics reveal that
            one in six individuals worldwide falls victim to a violent crime
            during their lifetime.
          </InfoText>
        </InfoContainer>
      </AnimationComponent>
      <StatCounter />
    </>
  );
};

export default Info;
