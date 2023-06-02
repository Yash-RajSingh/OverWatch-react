import Layout from "../../components/Layout/Layout";
import StoriesAdder from "../../components/Stories/StoriesAdder/StoriesAdder";
import StoriesSection from "../../components/Stories/StoriesSection";
import { useDispatch, useSelector } from "react-redux";
import getAllStories from "../../hooks/getAllStories";
import { setStoriesData } from "../../redux/actions/dataActions";
import { useEffect } from "react";

const StoriesPage = () => {
  const update = useSelector((state) => state.sidebar.update);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const request = await getAllStories();
      const response = await request;
      if (response?.status === 200) {
        dispatch(setStoriesData(response.data));
      }
    })();
  }, [update]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Layout>
        <StoriesAdder />
        <StoriesSection />
      </Layout>
    </>
  );
};

export default StoriesPage;
