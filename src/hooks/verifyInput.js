const verifyInput = (story, incident_date, location, anonymityCheck) => {
  if (story === "" || location === "" || incident_date === "") {
    return {
      status: 400,
      message: "Please fill all of the fields.",
    };
  }
  const anonymity = anonymityCheck ? "1" : "0";
  return {
    status: 200,
    data: {
      story,
      anonymity,
      location,
      incident_date,
    },
  };
};

export default verifyInput;
