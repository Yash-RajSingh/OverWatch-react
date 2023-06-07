const resetPassword = async (current_password,new_password, token) => {
  const BaseUrl = import.meta.env.VITE_APP_UPDATE_PASSWORD_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ current_password, new_password, token }),
    });
    const response = await request.json();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default resetPassword;
