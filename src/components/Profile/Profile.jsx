import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookies } from "../../hooks/cookies";
import getUserProfile from "../../hooks/getProfile";
import { setProfileData } from "../../redux/actions/authActions";
import { toast } from "react-toastify";

const Profile = () => {
  const auth = JSON.parse(getCookies({name:"authState"})) || useSelector((state)=> state.auth.authStatus)
  const dispath = useDispatch();
  const profileData = useSelector((state)=> state.auth.profileData)
  useEffect(()=>{
    (async()=>{
      const request = await getUserProfile(auth.token)
      const response = await request;
      if(response.status === 200){
        dispath(setProfileData({stories: response.stories_details, userDetail: response.user_details, zones: response.zones_details}))
      }else{
        toast.error("Error fetching user profile details.")
      }
    })()
  },[])
  return (
    <>
        
    </>
  );
};

export default Profile;
