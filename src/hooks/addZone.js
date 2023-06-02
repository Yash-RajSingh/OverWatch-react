const addZone = async (latitude, longitude, loc_name, token) => {
  const BaseUrl = import.meta.env.VITE_APP_ADD_ZONE_URL;
  const data = {
    latitude,
    longitude,
    loc_name,
    token,
  };
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default addZone;
