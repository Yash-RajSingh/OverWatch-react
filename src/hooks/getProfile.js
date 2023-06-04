const getUserProfile = async (token) => {
  const BaseUrl = import.meta.env.VITE_APP_USER_PROFILE_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getUserProfile;
