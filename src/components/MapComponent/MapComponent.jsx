import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { MapComponentContainer, MapContainerHeading } from "./MapComponentElements";
import 'leaflet/dist/leaflet.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setZoneData } from "../../redux/actions/dataActions";
import getAllZones from "../../hooks/getAllZones";
import Pin from '../../assets/danger-pin.png'
import L from 'leaflet'
const curtomIcon = new L.icon({
  iconUrl: Pin,
  iconSize: [30,30]
})

const MapComponent = () => {
  const update = useSelector((state) => state.sidebar.update);
  const zoneData = useSelector((state) => state.map.zoneData);
  const dispatch = useDispatch();
  useEffect(()=>{
    (async()=>{
      const request = await getAllZones();
      const response = await request;
      console.log(response)
      if(response?.status === 200){
        dispatch(setZoneData(response.data))
      }
    })()
  },[update])
  return (
    <>
      <MapComponentContainer>
        <MapContainerHeading>Danger Zones</MapContainerHeading>
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={4.5}
          scrollWheelZoom={true}
          zoomOffset={-10}
          style={{ height: "100%", width: "100%", marginTop:"2%", borderRadius:"10px", border:"1px solid rgba(0,0,0,0.5)" }}
        >
          <TileLayer
            url={"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}
            // url={"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"}
          />
          {zoneData.length > 0 && zoneData.map((element, index)=>{
            return (
              <Marker icon={curtomIcon} position={[parseFloat(element.latitude), parseFloat(element.longitude)]} key={"marker"+index}>
                <Popup>{element.loc_name}</Popup>
              </Marker>
            );
          } 
          )}
        </MapContainer>
      </MapComponentContainer>
    </>
  );
}
 
export default MapComponent;