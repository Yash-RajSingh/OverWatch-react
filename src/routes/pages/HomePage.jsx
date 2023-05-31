import { useEffect } from "react";
import Info from "../../components/Landing/Info/Info";
import Landing from "../../components/Landing/Landing";
import Layout from "../../components/Layout/Layout";
import MapComponent from "../../components/MapComponent/MapComponent";
import StoriesSection from "../../components/Stories/StoriesSection";
import { useDispatch, useSelector } from "react-redux";
import getAllZones from "../../hooks/getAllZones";
import getAllStories from "../../hooks/getAllStories";
import { setZoneData, setStoriesData } from "../../redux/actions/dataActions";

const HomePage = () => {
  const update = useSelector((state) => state.sidebar.update);
  const update2 = useSelector((state) => state.map.storieseData);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const request = await getAllZones();
      const response = await request;
      if (response?.status === 200) {
        dispatch(setZoneData(response.data));
      }
    })();
  }, [update]);
  useEffect(() => {
    (async () => {
      const request = await getAllStories();
      const response = await request;
      dispatch(setStoriesData(response.data));
      // if (response?.status === 200) {
      //   console.log("herer",update2)
      // }
    })();
  }, [update]);
  return (
    <>
      <Layout>
        <Landing />
        <Info />
        <MapComponent />
        <StoriesSection />
      </Layout>
    </>
  );
};

export default HomePage;
