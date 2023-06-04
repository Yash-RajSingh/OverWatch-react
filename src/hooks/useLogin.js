const useLogin = async (email, password) => {
  const BaseUrl = import.meta.env.VITE_APP_LOGIN_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default useLogin;
