import styled from "styled-components";
import { MapContainerHeading } from "../../MapComponent/MapComponentElements";
import { Button } from "../../Common/common";
export const StoriesAdderContainer = styled.div`
  /* border: 1px solid black; */
  width: 97%;
  margin-bottom: -5%;
`;
export const StoriesAdderHeading = styled(MapContainerHeading)``;

export const StoriesAdderWrapper = styled.div`
  /* border: 1px solid yellowgreen; */
`;

export const TextArea = styled.textarea.attrs({
  placeholder: "Add your story in about a 1000 words...",
})`
  border: 0.25px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  resize: none;
  height: 10rem;
  background: #ebecf0;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem;
  color: #172b4d;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.188rem;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  font-family: "Nunito";
  margin-top: 1%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid red; */
  margin-top: 1%;
  gap: 3%;
`;
export const InputLabel = styled.p`
  font-size: 1rem;
  font-family: "Nunito";
  color: "gray";
`;
export const DatePicker = styled.input.attrs({
  type: "date",
})`
  background: #ebecf0;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem;
  color: #172b4d;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.188rem;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  font-family: "Nunito";
  margin-top: 2%;
`;
export const LocationInput = styled.input.attrs({
  type: "text",
})`
  background: #ebecf0;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem;
  color: #172b4d;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.188rem;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  font-family: "Nunito";
  margin-top: 2%;
`;
export const AnonymousCheck = styled.input.attrs({
  type: "checkbox",
})`
  background: #ebecf0;
  color: #172b4d;
  outline: none;
  border: none;
  border-radius: 0.188rem;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  margin-top: 2%;
  width: 1.125rem;
  height: 1.125rem;
`;

export const ButtonsSubWrapper = styled.div`
  /* border: 1px solid yellow; */
`;
export const PostButton = styled(Button)``;
