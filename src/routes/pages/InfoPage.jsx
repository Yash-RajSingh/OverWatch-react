import { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Instruction from "../../components/Instruction/Instruction";
const InfoPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Layout>
        <Instruction />
      </Layout>
    </>
  );
};

export default InfoPage;
