import Profile from "../../components/Profile/Profile";
import Layout from "../../components/Layout/Layout";
import { useEffect } from "react";
const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Layout>
        <Profile />
      </Layout>
    </>
  );
};

export default ProfilePage;
