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
import { getCookies } from "../../../hooks/cookies";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AnimationComponent from "../../Animation";
const StoriesAdder = () => {
  const update = useSelector((state) => state.sidebar.update);
  const auth = JSON.parse(getCookies({ name: "authState" }))
  const storyRef = useRef();
  const dateRef = useRef();
  const locationRef = useRef();
  const anonymousCheckRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <AnimationComponent>
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
                  if (auth !== false && auth !== null) {
                    e.preventDefault();
                    var check = verifyInput(
                      storyRef.current.value,
                      dateRef.current.value,
                      locationRef.current.value,
                      anonymousCheckRef.current.checked
                    );
                    if (check.status === 200) {
                      const request = await addStory(check?.data, auth.token);
                      if (request?.status === 200) {
                        dispatch(toggleUpdate(!update));
                        storyRef.current.value = "";
                        dateRef.current.value = "";
                        locationRef.current.value = "";
                        anonymousCheckRef.current.checked = false;
                        toast.success("Story shared successfully!");
                      }
                    } else {
                      toast.warn(check.message);
                    }
                  } else {
                    toast.error(
                      "You need to be logged in to share your experience!"
                    );
                    setTimeout(() => navigate("/login"), 2000);
                  }
                }}
              >
                Post
              </PostButton>
            </ButtonsWrapper>
          </StoriesAdderWrapper>
        </StoriesAdderContainer>
      </AnimationComponent>
    </>
  );
};

export default StoriesAdder;
