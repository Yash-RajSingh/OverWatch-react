import { useState, useRef } from "react";
import "./login.css";
import test from "./test.jpg";

const LoginComponent = () => {
  const [flipState, setFlipState] = useState();
  const LoginEmailRef = useRef();
  const LoginPassRef = useRef();
  const SignupNameRef = useRef();
  const SignupEmailRef = useRef();
  const SignupPasswordRef = useRef();
  const SignupSecQuestionRef = useRef();
  const SignupSecAnswerRef = useRef();

  const HandleSignUp = async () => {
    const userData = {
      username: SignupNameRef.current.value,
      email: SignupEmailRef.current.value,
      password: SignupPasswordRef.current.value,
      sec_question: SignupSecQuestionRef.current.value,
      sec_answer: SignupSecAnswerRef.current.value.toUpperCase(),
    };
    console.log(JSON.stringify(userData));
    const BaseUrl = `https://overwatch-apis.herokuapp.com/authentication/register`;
    try {
      const request = await fetch(BaseUrl, {
        method: "POST",
        body: JSON.stringify(userData),
      });
      const response = await request.json();
      console.log("=>", response);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleLogin = async () => {
    const userData = {
      email: LoginEmailRef.current.value,
      password: LoginPassRef.current.value,
    };
    console.log(JSON.stringify(userData));
    const BaseUrl = `https://overwatch-apis.herokuapp.com/authentication/login`;
    try {
      const request = await fetch(BaseUrl, {
        method: "POST",
        body: JSON.stringify(userData),
      });
      const response = await request.json();
      console.log("=>", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="authBody">
        <div className="authContainer">
          <div className="authContent content">
            <img src={test} style={{ width: "70%" }} />
          </div>
          <div className="content">
            <div
              className="authWrapper"
              style={{ transform: `rotateY(${flipState}deg` }}
            >
              <div className="loginCard card">
                <div className="center">
                  <p>Don't Have an account?</p>
                  <button onClick={() => setFlipState(180)}>SignUp</button>
                </div>
                <div style={{ margin: "5% auto" }}>
                  <label>Email</label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your email"
                    required
                    ref={LoginEmailRef}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="Enter your password"
                    required
                    ref={LoginPassRef}
                  />
                </div>
                <div className="center">
                  <button onClick={HandleLogin}>LogIn</button>
                </div>
              </div>

              <div className="signupCard card">
                <div className="center">
                  <p>Already Have an account?</p>
                  <button onClick={() => setFlipState(0)}>Login</button>
                </div>
                <div>
                  <label> Username</label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your username"
                    required
                    ref={SignupNameRef}
                  />
                  <label> Email</label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your email"
                    required
                    ref={SignupEmailRef}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="Enter your password"
                    required
                    ref={SignupPasswordRef}
                  />
                  <label>Security Question</label>
                  <select ref={SignupSecQuestionRef}>
                    <option value="" disabled selected>
                      Security Question
                    </option>
                    <option>Favourite Food</option>
                    <option>Favourite Show</option>
                    <option>Favourite Movie</option>
                    <option>Favourite Picnic Spot</option>
                  </select>

                  <label>Security Answer</label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your security answer"
                    required
                    ref={SignupSecAnswerRef}
                  />
                  <div className="center">
                    <button onClick={HandleSignUp}>SignUp</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
