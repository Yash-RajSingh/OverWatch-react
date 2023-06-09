import { useSelector } from "react-redux";
import StoryCard from "./StoryCard/StoryCard";
import styled from "styled-components";
import { MapContainerHeading } from "../MapComponent/MapComponentElements";
import StoryModal from "./StoryModal/StoryModal";
import { useEffect, useState } from "react";
import AnimationComponent from "../Animation";
import Loader from "../Loader/Loader";
import getAllStories from "../../hooks/getAllStories";
import { setStoriesData } from "../../redux/actions/dataActions";
const StoriesContainer = styled.div`
  margin-top: 10%;
  /* border: 1px solid black; */
  padding-left: 1rem;
`;
const StoriesHeading = styled(MapContainerHeading)``;

const StoriesSection = () => {
  const storiesData = useSelector((state) => state.map.storiesData);
  const update = useSelector((state) => state.sidebar.update);
  const [count, setCount] = useState(4);
  useEffect(() => {
    if (!!storiesData.length > 0) {
      !window.location.href.includes("stories")
        ? setCount(4)
        : setCount(storiesData.length);
    }
    (async () => {
      const request = await getAllStories();
      const response = await request;
      if (response?.status === 200) {
        dispatch(setStoriesData(response.data));
      }
    })();
  }, [window.location.href, update]);
  return (
    <>
      <AnimationComponent>
        <StoriesContainer>
          <StoriesHeading>Stories</StoriesHeading>
          <StoryModal />
          {!!storiesData.length > 0 ? (
            <>
              {storiesData.slice(0, count).map((element, index) => (
                <StoryCard data={element} key={"storycard" + index} />
              ))}
            </>
          ) : (
            <Loader />
          )}
        </StoriesContainer>
      </AnimationComponent>
    </>
  );
};

export default StoriesSection;
