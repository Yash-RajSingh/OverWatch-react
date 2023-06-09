import styled from "styled-components";
import { MapContainerHeading } from "../../MapComponent/MapComponentElements";
import { useSelector, useDispatch } from "react-redux";
import { getCookies } from "../../../hooks/cookies";
import { toggleUpdate } from "../../../redux/actions/sidebarAction";
import {
  StoryCardBody,
  HeaderWrapper,
  ProfileImage,
  HeaderInfoWrapper,
  UserName,
  PostInfo,
  StoryWrapper,
} from "../../Stories/StoryCard/StoryCardElements";
import Profile from "../../../assets/profile.webp";
import deleteStory from "../../../hooks/deleteStory";
import { toast } from "react-toastify";
import Loader from "../../Loader/Loader";
const ProfileStoryContainer = styled.div`
  margin-top: 10%;
`;
const ProfileStoryHeading = styled(MapContainerHeading)``;

const ProfileStoryWrapper = styled.div``;
const IconWrapper = styled.div`
  flex: 1;
  text-align: right;
`;
const CloseButton = styled.p`
  transform: rotate(45deg);
  float: right;
  font-size: 2rem;
  color: #5e6c84;
  font-weight: 600;
  margin-top: -10px;
  cursor: pointer;
`;
const Description = styled.p`
  font-size: 0.75rem;
  color: black;
  margin-top: 2%;
  font-family: "Poppins";
  font-weight: 400;
`;
export const InfoMessage = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-family: "Nunito";
  margin-top: 5%;
`;

const ProfileStory = () => {
  const profileData = useSelector((state) => state.auth.profileData);
  const update = useSelector((state) => state.sidebar.update);
  const auth = JSON.parse(getCookies({ name: "authState" }));
  const dispatch = useDispatch();
  const StoryCard = ({ data }) => {
    const userType = data?.anonymity === 1 ? "Anonymous" : auth?.username;
    const storyType = data?.edited ? "Edited" : "Posted";
    const date = data?.edited ? data?.edited_on : data?.date_created;
    return (
      <>
        <StoryCardBody>
          <StoryWrapper>
            <HeaderWrapper>
              <ProfileImage src={Profile} />
              <HeaderInfoWrapper>
                <UserName>
                  {userType &&
                    userType.charAt(0).toUpperCase() + userType.slice(1)}
                </UserName>
                <PostInfo>
                  {data?.location} {" | "} {storyType} {" | "} {date}
                  {/* {data?.location} {"\u2022"} {" "}
                  {storyType} {"\u2022"} {date} */}
                </PostInfo>
                <Description>{data?.story}</Description>
              </HeaderInfoWrapper>
              <IconWrapper>
                <CloseButton
                  onClick={async () => {
                    const request = await deleteStory(data.suid, auth.token);
                    const response = await request;
                    if (response.status === 200) {
                      toast.success(response.message);
                      dispatch(toggleUpdate(!update));
                    } else {
                      toast.error("Error deleting story");
                    }
                  }}
                >
                  +
                </CloseButton>
              </IconWrapper>
            </HeaderWrapper>
          </StoryWrapper>
        </StoryCardBody>
      </>
    );
  };

  return (
    <>
      <ProfileStoryContainer>
        <ProfileStoryHeading>Story shared by you</ProfileStoryHeading>
        <ProfileStoryWrapper>
          {profileData?.stories ? (
            <>
              {profileData.stories.length > 0 ? (
                profileData.stories.map((element, index) => (
                  <StoryCard data={element} key={"storycard" + index} />
                ))
              ) : (
                <InfoMessage>
                  You haven't shared any dangerous experience yet!
                </InfoMessage>
              )}
            </>
          ) : (
            <Loader />
          )}
        </ProfileStoryWrapper>
      </ProfileStoryContainer>
    </>
  );
};

export default ProfileStory;
