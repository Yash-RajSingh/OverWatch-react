import { useRef } from "react";
import {
  AnonymousCheck,
  ButtonsSubWrapper,
  ButtonsWrapper,
  DatePicker,
  InputLabel,
  LocationInput,
  PostButton,
  StoriesAdderContainer,
  StoriesAdderHeading,
  StoriesAdderWrapper,
  TextArea,
} from "./StoriesAdderElements";
import verifyInput from "../../../hooks/verifyInput";
import addStory from "../../../hooks/addStory";
import { useDispatch, useSelector } from "react-redux";
import { toggleUpdate } from "../../../redux/actions/sidebarAction";

const StoriesAdder = () => {
  const update = useSelector((state) => state.sidebar.update);
  const storyRef = useRef();
  const dateRef = useRef();
  const locationRef = useRef();
  const anonymousCheckRef = useRef();
  const dispatch = useDispatch();
  return (
    <>
      <StoriesAdderContainer>
        <StoriesAdderHeading>Share your experience</StoriesAdderHeading>
        <StoriesAdderWrapper>
          <TextArea ref={storyRef} />
          <ButtonsWrapper>
            <ButtonsSubWrapper>
              <InputLabel>Date of incident</InputLabel>
              <DatePicker ref={dateRef} />
            </ButtonsSubWrapper>
            <ButtonsSubWrapper>
              <InputLabel>Location of incident</InputLabel>
              <LocationInput ref={locationRef} />
            </ButtonsSubWrapper>
            <ButtonsSubWrapper style={{ display: "flex", gap: "5px" }}>
              <InputLabel>Post anonymously?</InputLabel>
              <AnonymousCheck ref={anonymousCheckRef} />
            </ButtonsSubWrapper>
            <PostButton
              size={"8rem"}
              onClick={async (e) => {
                e.preventDefault();
                const token =
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR0IiwidWlkIjoiYjdkYTI1ZjctNzdlNS00N2QwLThiYzItODU3YWFjZGRiZGNjIiwiZXhwIjoxNjg2Mjc1MzQyfQ.Q9K77NibP6KnTVvbQGQlGqb1n_5i7MrZ-jywYDC8iB0";
                var check = verifyInput(
                  storyRef.current.value,
                  dateRef.current.value,
                  locationRef.current.value,
                  anonymousCheckRef.current.checked
                );
                if (check.status === 200) {
                  const request = await addStory(check.data, token);
                  if (request.status === 200) {
                    dispatch(toggleUpdate(!update));
                    storyRef.current.value = "";
                    dateRef.current.value = "";
                    locationRef.current.value = "";
                    anonymousCheckRef.current.checked = false;
                  }
                }
              }}
            >
              Post
            </PostButton>
          </ButtonsWrapper>
        </StoriesAdderWrapper>
      </StoriesAdderContainer>
    </>
  );
};

export default StoriesAdder;