import { useSelector } from "react-redux";
import StoryCard from "./StoryCard/StoryCard";
import styled from "styled-components";
import { MapContainerHeading } from "../MapComponent/MapComponentElements";
import StoryModal from "./StoryModal/StoryModal";
const StoriesContainer = styled.div`
  margin-top: 10%;
  /* border: 1px solid black; */
  padding-left: 1rem;
`;
const StoriesHeading = styled(MapContainerHeading)``;

const StoriesSection = () => {
  const storiesData = useSelector((state) => state.map.storiesData);
  // console.log(storiesData)
  return (
    <>
      <StoriesContainer>
        <StoriesHeading>Stories</StoriesHeading>
        <StoryModal />
        {!!storiesData.length > 0 &&
          storiesData
            .slice(0, 4)
            .map((element, index) => (
              <StoryCard data={element} key={"storycard" + index} />
            ))}
      </StoriesContainer>
    </>
  );
};

export default StoriesSection;
