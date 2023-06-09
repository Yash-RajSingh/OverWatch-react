import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookies } from "../../hooks/cookies";
import getUserProfile from "../../hooks/getProfile";
import { setProfileData } from "../../redux/actions/authActions";
import { toast } from "react-toastify";
import {
  InuptField,
  ProfileContainer,
  ProfileHeaderSubWrapper,
  ProfileHeaderWrapper,
  ProfileHeading,
  ProfileImage,
  ProfileZonesWrapper,
  UserEmail,
  UserName,
} from "./ProfileElements";
import ProfileIcon from "../../assets/profile.webp";
import { Button } from "../Common/common";
import resetPassword from "../../hooks/resetPassword";
import AnimatedComponent from "../Animation";
import ProfileZone from "./ProfileZone/ProfileZone";
import ProfileStory from "./ProfileStory/ProfileStory";

const Profile = () => {
  const auth =
    JSON.parse(getCookies({ name: "authState" })) ||
    useSelector((state) => state.auth.authStatus);
  const update = useSelector((state) => state.sidebar.update);
  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const dispath = useDispatch();
  const profileData = useSelector((state) => state.auth.profileData);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    (async () => {
      const request = await getUserProfile(auth.token);
      const response = await request;
      if (response.status === 200) {
        dispath(
          setProfileData({
            stories: response.stories_details,
            userDetail: response.user_details,
            zones: response.zones_details,
          })
        );
      } else {
        toast.error("Error fetching user profile details.");
      }
    })();
  }, [update]);
  const handleResetPassword = async () => {
    setIsDisabled(true);
    if (
      currentPasswordRef.current.value === "" ||
      newPasswordRef.current.value === ""
    ) {
      toast.warn("Please fill both the fields");
      setIsDisabled(false);
      return;
    }
    if (newPasswordRef.current.value.length <= 6) {
      toast.warn("The passoword needs to be longer than 6 characters");
      setIsDisabled(false);
      return;
    }
    const request = await resetPassword(
      currentPasswordRef.current.value,
      newPasswordRef.current.value,
      auth.token
    );
    const response = await request;
    if (response?.status === 200) {
      toast.success(response.message);
    } else if (response.status === 400) {
      toast.error(response.message);
    } else {
      toast.error("Error updating password!");
    }
    setIsDisabled(false);
  };
  return (
    <>
      <ProfileContainer>
        {!!!Array.isArray(profileData) && (
          <>
            <AnimatedComponent>
              <ProfileHeaderWrapper>
                <ProfileImage src={ProfileIcon} />
                <ProfileHeaderSubWrapper>
                  <UserName>{profileData?.userDetail[0]?.username}</UserName>
                  <UserEmail>{profileData?.userDetail[0]?.email}</UserEmail>
                  <InuptField
                    placeholder="Current password"
                    ref={currentPasswordRef}
                  />
                  <br />
                  <InuptField placeholder="New password" ref={newPasswordRef} />
                  <br />
                  <Button
                    size={"15rem"}
                    top={"3%"}
                    disabled={isDisabled}
                    onClick={handleResetPassword}
                  >
                    Reset password
                  </Button>
                </ProfileHeaderSubWrapper>
              </ProfileHeaderWrapper>
            </AnimatedComponent>
          </>
        )}
        {/* {!!!Array.isArray(profileData) && ( */}
        <>
          <AnimatedComponent>
            <ProfileZonesWrapper>
              <ProfileHeading>Danger zones by you</ProfileHeading>
              <ProfileZone />
            </ProfileZonesWrapper>
          </AnimatedComponent>
        </>
        {/* )} */}
        {/* {!!!Array.isArray(profileData) && ( */}
        <>
          <AnimatedComponent>
            <ProfileStory />
          </AnimatedComponent>
        </>
        {/* )} */}
      </ProfileContainer>
    </>
  );
};

export default Profile;
