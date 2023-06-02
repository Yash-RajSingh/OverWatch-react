const getLocationName = async (lat, long) => {
  const BaseUrl = import.meta.env.VITE_APP_GET_LOCATION_NAME_URL;
  const RequestURL = `${BaseUrl}?latitude=${lat}&longitude=${long}&localityLanguage=en`;
  try {
    const request = await fetch(RequestURL, {
      method: "GET",
    });
    const response = await request.json();
    return {
      status: 200,
      data: {
        city: response.locality,
        state: response.principalSubdivision,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export default getLocationName;
