const useSignup = async (username, email, password) => {
  const BaseUrl = import.meta.env.VITE_APP_SIGNUP_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }  
}
 
export default useSignup;