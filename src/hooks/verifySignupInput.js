const verifySignupInput = (name, email, password, confirmPassword) => {
  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    return {
      status: 400,
      message: "Please fill all of the fields.",
    };
  }
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailformat)) {
    return {
      status: 400,
      message: "Please enter a valid email",
    };
  }
  if (password.length <= 6) {
    return {
      status: 400,
      message: "Passwords must be of more than 6 characters",
    };
  }
  if (password !== confirmPassword) {
    return {
      status: 400,
      message: "Passwords do not match",
    };
  }
  return {
    status: 200,
  };
};

export default verifySignupInput;
