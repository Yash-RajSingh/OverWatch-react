const addStory = async (data, token) => {
  const BaseUrl = import.meta.env.VITE_APP_ADD_STORY_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, token }),
    });
    const response = await request.json();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default addStory;
