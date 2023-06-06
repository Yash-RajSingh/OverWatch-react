import {
  StoryCardBody,
  StoryWrapper,
  UserName,
  HeaderWrapper,
  ProfileImage,
  HeaderInfoWrapper,
  PostInfo,
  Description,
  ReadMore,
} from "./StoryCardElements";
import Profile from "../../../assets/profile.webp";
import { useDispatch } from "react-redux";
import { setActiveStory } from "../../../redux/actions/dataActions";
import AnimationComponent from "../../Animation";
const StoryCard = ({ data }) => {
  const userType = !!data?.anonymity ? "Anonymous" : data?.username;
  const storyType = data?.edited ? "Edited" : "Posted";
  const date = data?.edited ? data?.edited_on : data?.date_created;
  const dispatch = useDispatch();
  return (
    <>
      <AnimationComponent>
        <StoryCardBody>
          <StoryWrapper>
            <HeaderWrapper>
              <ProfileImage src={Profile} />
              <HeaderInfoWrapper>
                <UserName>
                  {userType.charAt(0).toUpperCase() + userType.slice(1)}
                </UserName>
                <PostInfo>
                  {data?.location} {" | "} {storyType} {" | "} {date}
                  {/* {data?.location} {"\u2022"} {" "}
                {storyType} {"\u2022"} {date} */}
                </PostInfo>
                <Description>{data?.story}</Description>
              </HeaderInfoWrapper>
            </HeaderWrapper>
            <ReadMore
              onClick={(e) => {
                e.preventDefault();
                dispatch(setActiveStory(data));
              }}
            >
              Read more...
            </ReadMore>
          </StoryWrapper>
        </StoryCardBody>
      </AnimationComponent>
    </>
  );
};

export default StoryCard;
