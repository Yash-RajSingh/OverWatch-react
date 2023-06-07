import styled from "styled-components";
import {MapContainerHeading} from '../MapComponent/MapComponentElements'
export const ProfileContainer = styled.div`
  /* border: 1px solid black; */
  padding-left: 0.5rem;
`

export const ProfileHeaderWrapper = styled.div`
  width: 90%;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 3%;
  margin-left: 5%;
  `

export const ProfileImage = styled.img`
  width: 8rem;
  `
export const ProfileHeaderSubWrapper = styled.div`
flex-grow: 1;
`
export const UserName = styled.p`
  font-size: 2rem;
  font-family: 'Nunito';
  line-height: 1;
`
export const UserEmail = styled.p`
  color: grey;
  font-size: 1.125rem;
  font-family: 'Poppins';
`

export const InuptField = styled.input.attrs({
  type:"password"
})`
  color: #172b4d;
  margin-top: ${(props) => (props.top ? props.top : "2%")};
  font-size: 1.25rem;
  font-family: "Nunito";
  background: #ebecf073;
  width: 40%;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.188rem;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  &:focus {
    background: white;
  }
`;

export const  ProfileZonesWrapper = styled.div`
  /* border: 1px solid black; */
  margin-top: 8%;
`
export const ProfileHeading = styled(MapContainerHeading)``