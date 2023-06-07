const deleteStory = async (suid, token) => {
  const BaseUrl = import.meta.env.VITE_APP_DELETE_STORY_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ suid, token }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default deleteStory;
