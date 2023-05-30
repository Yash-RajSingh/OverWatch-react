import { useEffect, useState } from "react";
import styled from "styled-components";
import getCounterStats from "../../../hooks/getCounterStats";
import { useSelector } from "react-redux";
const CounterContainer = styled.div`
  /* border: 1px solid black; */
  width: 98%;
  margin-left: auto;
  display: flex;
  justify-content: space-evenly;
  margin-top: 7%;
`;
const CounterColumn = styled.div`
  width: 20%;
  font-family: "Nunito";
  font-weight: 600;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Count = styled.p`
  font-family: "Poppins";
  font-size: 2.5rem;
`;

const StatCounter = () => {
  const update = useSelector((state) => state.sidebar.update);
  const [userCounter, setuserCounter] = useState(0);
  const [storiesCounter, setStoriesCounter] = useState(0);
  const [zonesCounter, setZonesCounter] = useState(0);
  const [data, setData] = useState(false);
  useEffect(() => {
    (async()=>{
      const request = await getCounterStats()
      const response = await request;
      setData(response)
    })()
  },[update]);
  if(data !== false){
    userCounter < data.users_count && setTimeout(() => setuserCounter(userCounter + 1), 50);
    storiesCounter < data.stories_count && setTimeout(() => setStoriesCounter(storiesCounter + 1), 50);
    zonesCounter < data.zones_count && setTimeout(() => setZonesCounter(zonesCounter + 1), 50);
  }
  return (
    <>
      <CounterContainer>
        <CounterColumn>
          <Count>{userCounter}+</Count>Active Users
        </CounterColumn>
        <CounterColumn>
          <Count>{storiesCounter}+</Count>Stories Shared
        </CounterColumn>
        <CounterColumn>
          <Count>{zonesCounter}+</Count>Zones Alerted
        </CounterColumn>
      </CounterContainer>
    </>
  );
};

export default StatCounter;
