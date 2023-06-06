import {
  TileLayer,
  MapContainer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import {
  MapComponentContainer,
  MapContainerHeading,
  MapWrapper,
} from "./MapComponentElements";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import Pin from "../../assets/danger-pin.webp";
import L from "leaflet";
import getLocationName from "../../hooks/getLocationName";
import addZone from "../../hooks/addZone";
import { toggleUpdate } from "../../redux/actions/sidebarAction";
import { getCookies } from "../../hooks/cookies";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AnimationComponent from "../Animation";
const curtomIcon = new L.icon({
  iconUrl: Pin,
  iconSize: [30, 30],
});

const LocationMarker = ({ props }) => {
  const navigate = useNavigate();
  const auth =
    JSON.parse(getCookies({ name: "authState" })) ||
    useSelector((state) => state.auth.authStatus);
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      if (auth !== false) {
        (async () => {
          const request = await getLocationName(lat, lng);
          if (request?.status === 200) {
            const addingZone = await addZone(
              lat,
              lng,
              request.data.city,
              auth.token
            );
            if (addingZone?.status === 200) {
              toast.success("Danger zone added successfully!");
              props.dispatch(toggleUpdate(!props.update));
            } else {
              toast.error("Error adding danger zones");
            }
          } else {
            toast.error("Error adding danger zones");
          }
        })();
      } else {
        toast.error("You need to be logged in to add a danger zone!");
        setTimeout(() => navigate("/login"), 2000);
      }
    },
  });
};
const MapComponent = () => {
  const zoneData = useSelector((state) => state.map.zoneData);
  const update = useSelector((state) => state.sidebar.update);
  const dispatch = useDispatch();
  return (
    <>
      <AnimationComponent>
        <MapComponentContainer>
          <MapContainerHeading>Danger Zones</MapContainerHeading>
          <MapWrapper>
            <MapContainer
              center={[20.5937, 78.9629]}
              zoom={4.5}
              scrollWheelZoom={true}
              zoomOffset={-10}
              style={{
                height: "100%",
                width: "100%",
                marginTop: "2%",
                borderRadius: "10px",
                border: "1px solid rgba(0,0,0,0.5)",
              }}
            >
              <TileLayer
                url={"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}
                // url={"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"}
              />
              {zoneData.length > 0 &&
                zoneData.map((element, index) => {
                  return (
                    <Marker
                      icon={curtomIcon}
                      position={[
                        parseFloat(element.latitude),
                        parseFloat(element.longitude),
                      ]}
                      key={"marker" + index}
                    >
                      <Popup>{element.loc_name}</Popup>
                    </Marker>
                  );
                })}
              <LocationMarker props={{ dispatch, update }} />
            </MapContainer>
          </MapWrapper>
        </MapComponentContainer>
      </AnimationComponent>
    </>
  );
};

export default MapComponent;
