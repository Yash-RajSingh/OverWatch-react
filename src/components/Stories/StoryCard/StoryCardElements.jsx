import styled from "styled-components";
export const StoryCardBody = styled.div`
  background: var(--white);
  width: 70%;
  border-radius: 10px;
  margin-top: 2%;
  box-shadow: 0px 2px 3px #00000029;
`;
export const StoryWrapper = styled.div`
  /* border: 1px solid red; */
  padding: 1rem;
`;

export const UserName = styled.p`
  color: black;
  font-size: 1.25rem;
  font-family: "Nunito";
  font-weight: 600;
`;

export const HeaderWrapper = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  align-items: flex-start;
  gap: 2%;
`;
export const HeaderInfoWrapper = styled.div`
  /* border: 1px solid green; */
`;
export const PostInfo = styled.p`
  color: grey;
  font-family: "Poppins";
  font-size: 0.8rem;
`;
export const ProfileImage = styled.img`
  width: 2rem;
`;
export const Description = styled.p`
  font-size: 0.75rem;
  color: black;
  margin-top: 2%;
  font-family: "Poppins";
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ReadMore = styled.p`
  font-size: 0.8rem;
  font-family: "Nunito";
  color: #004479;
  text-align: right;
  margin-top: 0.5%;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
