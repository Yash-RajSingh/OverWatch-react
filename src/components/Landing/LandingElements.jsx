import styled from "styled-components";

export const LandingContainer = styled.div`
  /* border: 1px solid black; */
`

export const LandingWrapper = styled.div`
  display: flex;
  /* border: 1px solid blue; */
`

export const LandingContentWrapper = styled.div`
  width: 50%;
  /* border: 1px solid yellow; */
  padding-left: 2rem;
`
export const LandingMotto = styled.p`
  font-size: 3rem;
  font-family: 'Oswald';
  font-weight: 900;
  width: 80%;
  margin-top: 15%;
`
export const LandingDescription = styled.p`
  font-family: 'Poppins';
  margin-top: 3%;
  color: gray;
`
export const ArrowImage = styled.img`
  width: 8rem;
  position: absolute;
  margin-top: 20%;
  margin-left: 5%;
  transform: scaleX(-1);
`;

export const LandingImageWrapper = styled.div`
  width: 50%;
  background: var(--light-pink);
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 5%;
`

export const LandingImage = styled.img`
  width: 45%;
  margin-top: ${(props) => props.top};
  border-radius: 1rem;
`;