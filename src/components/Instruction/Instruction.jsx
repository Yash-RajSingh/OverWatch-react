import {
  InstrctionMainWrapper,
  InstructionContainer,
  InstructionMainImageWrapper,
  InstructionImage,
  InstructionMainSubWrapper,
  InstructionHeading,
  InstructionDescription,
} from "./InstructionElements";
import Hero from "../../assets/hero.webp";
import Safe from "../../assets/safe.webp";
import Safety from "../../assets/safety.webp";
import Story from "../../assets/story.webp";
import DangerZone from "../../assets/dangerZone.webp";
import AnimatedComponent from "../Animation";

const Instruction = () => {
  return (
    <>
      <InstructionContainer>
        <AnimatedComponent>
          <InstrctionMainWrapper style={{ marginTop: "7%" }}>
            <InstructionMainSubWrapper>
              <InstructionHeading>Our Vision</InstructionHeading>
              <InstructionDescription>
                At{" "}
                <span style={{ fontWeight: 600, color: "black" }}>
                  OverWatch
                </span>
                , our vision is to create a safer world by empowering
                individuals and communities to share and learn from their
                experiences. We believe that by harnessing the collective wisdom
                and insights of people, we can make a significant impact on
                public safety and help create a culture of vigilance and
                security.
              </InstructionDescription>
            </InstructionMainSubWrapper>
            <InstructionMainImageWrapper>
              <InstructionImage src={Safety} />
              {/* ZONES */}
            </InstructionMainImageWrapper>
          </InstrctionMainWrapper>
        </AnimatedComponent>
        <AnimatedComponent>
          <InstrctionMainWrapper reverse>
            <InstructionMainSubWrapper>
              <InstructionHeading>
                Empowering Users to Mark Danger Zones
              </InstructionHeading>
              <InstructionDescription>
                At Our platform allows users to mark danger zones based on their
                experiences. By sharing information about areas that may pose a
                risk to personal safety, we aim to raise awareness and help
                others make informed decisions. Together, we can create a
                comprehensive map of potential danger zones, enabling
                individuals to navigate their surroundings with greater caution
                and confidence.
              </InstructionDescription>
            </InstructionMainSubWrapper>
            <InstructionMainImageWrapper>
              <InstructionImage src={DangerZone} />
            </InstructionMainImageWrapper>
          </InstrctionMainWrapper>
        </AnimatedComponent>
        <AnimatedComponent>
          {/* STORIES  */}
          <InstrctionMainWrapper>
            <InstructionMainSubWrapper>
              <InstructionHeading>
                Stories: Sharing Experiences, Inspiring Change
              </InstructionHeading>
              <InstructionDescription>
                The power of storytelling is undeniable. Through our "Stories"
                feature, users can share their personal experiences, insights,
                and lessons learned. By providing a space for individuals to
                express themselves and exchange stories, we hope to foster a
                supportive community that encourages dialogue, empathy, and the
                empowerment of others. These stories serve as a source of
                inspiration, awareness, and encouragement for everyone striving
                to stay safe and make a positive impact.
              </InstructionDescription>
            </InstructionMainSubWrapper>
            <InstructionMainImageWrapper>
              <InstructionImage src={Story} />
            </InstructionMainImageWrapper>
          </InstrctionMainWrapper>
        </AnimatedComponent>
        <AnimatedComponent>
          {/* VIGILANCE  */}
          <InstrctionMainWrapper reverse>
            <InstructionMainSubWrapper>
              <InstructionHeading>
                Strengthening Vigilance for a Safer Future
              </InstructionHeading>
              <InstructionDescription>
                By leveraging technology and community collaboration, we aim to
                strengthen vigilance and enhance public safety measures. Our
                platform serves as a hub for sharing information, resources, and
                best practices. We encourage individuals, organizations, and
                authorities to join forces in addressing safety concerns,
                implementing preventive measures, and promoting education and
                awareness.
              </InstructionDescription>
            </InstructionMainSubWrapper>
            <InstructionMainImageWrapper>
              <InstructionImage src={Safe} />
            </InstructionMainImageWrapper>
          </InstrctionMainWrapper>
        </AnimatedComponent>
        <AnimatedComponent>
          {/* HEROES  */}
          <InstrctionMainWrapper>
            <InstructionMainSubWrapper>
              <InstructionHeading>
                Together, Let's Create a Safer World
              </InstructionHeading>
              <InstructionDescription>
                We believe that everyone has the right to feel safe and secure
                in their surroundings. By coming together and harnessing the
                power of shared knowledge and experiences, we can build a safer
                world for ourselves and future generations. We invite you to
                join us on this journey, as we empower individuals, foster
                vigilance, and create a community dedicated to public safety.
              </InstructionDescription>
            </InstructionMainSubWrapper>
            <InstructionMainImageWrapper>
              <InstructionImage src={Hero} />
            </InstructionMainImageWrapper>
          </InstrctionMainWrapper>
        </AnimatedComponent>
      </InstructionContainer>
    </>
  );
};

export default Instruction;
