import Info from "../../components/Landing/Info/Info";
import Landing from "../../components/Landing/Landing";
import Layout from "../../components/Layout/Layout";
import MapComponent from "../../components/MapComponent/MapComponent";

const HomePage = () => {
  return ( 
    <>
    <Layout>
      <Landing />
      <Info />
      <MapComponent />
    </Layout>
    </>
   );
}
 
export default HomePage;