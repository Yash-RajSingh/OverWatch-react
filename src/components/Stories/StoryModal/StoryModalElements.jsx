import styled, { keyframes } from "styled-components";
import { ProfileImage, UserName } from "../StoryCard/StoryCardElements";
import { PostInfo } from "../StoryCard/StoryCardElements";
const SlideIn = keyframes`
from {
    transform: translateX(100%); /* Initial position */
    opacity: 0; /* Optional: Add opacity animation */
  }
  to {
    transform: translateX(0); /* Final position */
    opacity: 1; /* Optional: Add opacity animation */
  }
`;
const SlideOut = keyframes`
from {
    transform: translateX(0); /* Initial position */
    opacity: 1; /* Optional: Add opacity animation */
  }
  to {
    transform: translateX(100%); /* Final position */
    opacity: 0; /* Optional: Add opacity animation */
  }
`;
export const StoryModalContainer = styled.div`
  min-width: 25%;
  max-width: 25%;
  background: var(--white);
  position: fixed;
  height: 98vh;
  right: 0.5%;
  z-index: 1000;
  top: 1%;
  padding: 1rem 0.5rem 1rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  animation-name: ${(props) => (props.anime ? SlideIn : SlideOut)};
  animation-duration: 0.35s;
  animation-timing-function: ease-in-out;
  overflow: hidden;
`;
export const InputModalCloseButton = styled.div`
  transform: rotate(45deg);
  float: right;
  font-size: 2rem;
  color: #5e6c84;
  font-weight: 600;
  margin-top: -10px;
  cursor: pointer;
`;

export const StoryModalWrapper = styled.div`
  /* border: 1px solid yellow; */
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 3%;
  margin-top: 5%;
`;
export const ProfileIcon = styled(ProfileImage)`
  width: 2.5rem;
`;
export const StoryModalContentWrapper = styled.div`
  /* border: 1px solid red; */
`;
export const StoryModalUsername = styled(UserName)``;
export const StoryModalPostInfo = styled(PostInfo)`
  font-size: 0.7rem;
`;
export const StoryDescription = styled.p`
  font-size: 0.85rem;
  color: black;
  margin-top: 5%;
  font-family: "Poppins";
  font-weight: 400;
  width: 95%;
  overflow-y: auto;
  max-height: 87%;
`;
