const getAllStories = async () => {
  const BaseUrl = import.meta.env.VITE_APP_GET_ALL_STORIES_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "GET",
      redirect: "follow",
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getAllStories;
