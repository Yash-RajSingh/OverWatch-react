import { useDispatch, useSelector } from "react-redux";
import {
  InputModalCloseButton,
  StoryModalContainer,
  StoryModalWrapper,
  ProfileIcon,
  StoryModalContentWrapper,
  StoryModalUsername,
  StoryModalPostInfo,
  StoryDescription,
} from "./StoryModalElements";
import Profile from "../../../assets/profile.webp";
import { setActiveStory } from "../../../redux/actions/dataActions";
import { useEffect } from "react";
const StoryModal = () => {
  const storyData = useSelector((state) => state.map.activeStory);
  const dispatch = useDispatch();
  const userType = !!storyData?.anonymity ? "Anonymous" : storyData?.username;
  const storyType = storyData?.edited ? "Edited" : "Posted";
  const date = storyData?.edited
    ? storyData?.edited_on
    : storyData?.date_created;
  useEffect(() => {
    dispatch(setActiveStory([]));
  }, []);
  return (
    <>
      {!!!Array.isArray(storyData) && (
        <StoryModalContainer>
          <InputModalCloseButton
            onClick={(e) => {
              dispatch(setActiveStory([]));
            }}
          >
            +
          </InputModalCloseButton>
          <StoryModalWrapper>
            <ProfileIcon src={Profile} />
            <StoryModalContentWrapper>
              <StoryModalUsername>
                {userType.charAt(0).toUpperCase() + userType.slice(1)}
              </StoryModalUsername>
              <StoryModalPostInfo>
                {storyData?.location} {" | "} {storyType} {" | "} {date}
              </StoryModalPostInfo>
            </StoryModalContentWrapper>
          </StoryModalWrapper>
          <StoryDescription>{storyData?.story}</StoryDescription>
        </StoryModalContainer>
      )}
    </>
  );
};

export default StoryModal;
