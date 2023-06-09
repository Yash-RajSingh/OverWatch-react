import styled from "styled-components";

export const ProfileZonesContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  gap: 2%;
  margin-top: 2%;
`;

export const ProfileZonesListWrapper = styled.div`
  /* border: 1px solid blue; */
  width: 30%;
`;
export const ProfileZoneListItem = styled.div`
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 0.25rem;
  margin-top: 3%;
  width: 80%;
  box-shadow: 0px 2px 3px #00000029;
`;
export const ZoneName = styled.p`
  font-family: "Nunito";
  font-size: 1.25rem;
  cursor: pointer;
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
export const ProfileMapContainer = styled.div`
  /* border: 1px solid green; */
  width: 70%;
  height: ${(props) => props.height || `70vh`};
`;
