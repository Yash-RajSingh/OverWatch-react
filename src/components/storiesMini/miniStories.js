import "./miniStories.css";
import { useEffect, useState } from "react";
import At from "../../assets/at.png";
const MiniStoryCard = (data) => {
  var currentData = data.data;
  return (
    <>
      <div className="miniStoryCard">
        <p className="author">
          {currentData.anonymity === 0
            ? `${currentData.username}`
            : "Anonymous"}
        </p>
        <div className="subInfoWrapper">
          <div className="subInfoBlock" style={{display: "flex", gap: "5%", alignItems: "center", width: "30%"}}>
            <img src={At} alt="icon" className="at-icon" />
            <p className="subInfo location">{currentData.location} </p>
          </div>
        <div className="subInfoBlock">
            <p className="subInfo date">{currentData.incident_date} </p>
        </div>
        </div>
        <p className="story"> {`${currentData.story}`} </p>
        <p className="posted-on"> {currentData.date_created}</p>
      </div>
    </>
  );
};

const MiniStories = () => {
  const [stories, setStories] = useState();
  useEffect(() => {
    const getStories = async () => {
      try {
        const url = `https://overwatch-apis.herokuapp.com/stories/get_all_stories`;
        const request = await fetch(url, {
          method: "GET",
        });
        const response = await request.json();
        setStories(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getStories();
  }, []);
  return (
    <>
      <div className="miniStoriesContainer">
        <h3 className="container-heading">Stories</h3>
        <div className="miniStoriesWrapper">
          {stories &&
            stories.slice(0, 4).map((current, index) => {
              return (
                <>
                  <MiniStoryCard data={current} />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MiniStories;
