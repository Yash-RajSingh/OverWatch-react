import { useDispatch, useSelector } from "react-redux";
import { ProfileMapContainer, ProfileZoneListItem,InputModalCloseButton, ProfileZonesContainer, ProfileZonesListWrapper, ZoneName } from "./ProfileZoneElement";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Pin from "../../../assets/danger-pin.webp";
import L from "leaflet";
import { useState, useEffect } from "react";
import { getCookies } from "../../../hooks/cookies";
import deleteZone from "../../../hooks/deleteZone";
import { toggleUpdate } from "../../../redux/actions/sidebarAction";
import { toast } from "react-toastify";
import { Button } from "../../Common/common";

const curtomIcon = new L.icon({
  iconUrl: Pin,
  iconSize: [30, 30],
});

const ProfileZone = () => {
  const profileData = useSelector((state) => state.auth.profileData);
  const update = useSelector((state) => state.sidebar.update);
  const [mapActiveCenter, setMapActiveCenter] = useState(false)
  const [mapKey, setMapKey] = useState(0);
  const [mapCenter, setMapCenter] = useState(mapActiveCenter || [20.5937, 78.9629])
  const auth = JSON.parse(getCookies({name:"authState"}))
  const dispatch = useDispatch();
  useEffect(() => {
    if (mapActiveCenter) {
      setMapCenter(mapActiveCenter);
    } else{
      setMapCenter([20.5937, 78.9629]);
    }
  }, [mapActiveCenter]);

  useEffect(() => {
    // Update the key to force map reload
    setMapKey((prevKey) => prevKey + 1);
  }, [mapCenter]);
  return (
    <>
      <ProfileZonesContainer>
        <ProfileZonesListWrapper>
          {profileData?.zones &&
            profileData.zones.map((element, index) => {
              return (
                <>
                  <ProfileZoneListItem>
                    <ZoneName
                      onClick={() => {
                        setMapActiveCenter(false)
                        setMapActiveCenter([
                          parseFloat(element.latitude),
                          parseFloat(element.longitude),
                        ]);
                      }}
                    >
                      {element.loc_name}
                    </ZoneName>
                    <InputModalCloseButton onClick={async ()=>{
                      const request = await deleteZone(element.zuid, auth.token);
                      const response = await request;
                      if(response.status === 200){
                        toast.success(response.message);
                        dispatch(toggleUpdate(!update));
                        setMapActiveCenter(false)
                      } else{
                        toast.error("Error Deleting zone")
                      }
                    }}>+</InputModalCloseButton>
                  </ProfileZoneListItem>
                </>
              );
            })}
        </ProfileZonesListWrapper>
        <ProfileMapContainer>
          <MapContainer
            center={mapCenter}
            zoom={mapActiveCenter ? 9 : 5}
            scrollWheelZoom={true}
            key={mapKey}
            // zoomOffset={-10}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              border: "1px solid rgba(0,0,0,0.5)",
            }}
          >
            <TileLayer
              url={"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}
            />
            {profileData?.zones && (
              <>
                {mapActiveCenter ? (
                  <>
                    <Marker icon={curtomIcon} position={mapActiveCenter}>
                    </Marker>
                  </>
                ) : (
                  <>
                    {profileData?.zones.map((element, index) => {
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
                  </>
                )}
              </>
            )}
          </MapContainer>
          <div style={{textAlign:"center"}}>
            <Button top={"2%"} size={"20rem"} onClick={()=>{
              setMapActiveCenter(false)
            }}>Reset map view</Button>
          </div>
        </ProfileMapContainer>
      </ProfileZonesContainer>
    </>
  );
}
 
export default ProfileZone;