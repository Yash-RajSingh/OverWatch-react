import Layout from "../../components/Layout/Layout";
import Login from "../../components/Login/Login";
import { useEffect } from "react";
const LoginPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export default LoginPage;
