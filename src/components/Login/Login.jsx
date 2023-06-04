import { useRef, useState } from "react";
import { Button } from "../Common/common";
import {
  InfoWrapper,
  Link,
  LoginContainer,
  LoginInput,
  LoginLabel,
  LoginWrapper,
} from "./LoginElements";
import { useDispatch, useSelector } from "react-redux";
import verifySignupInput from "../../hooks/verifySignupInput";
import useSignup from "../../hooks/useSignup";
import { toast } from "react-toastify";
import { setAuthData } from "../../redux/actions/authActions";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import {createCookie} from '../../hooks/cookies'
const Login = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);
  const signupEmailRef = useRef(null);
  const signupUsernameRef = useRef(null);
  const signupPasswordRef = useRef(null);
  const ConfirmPasswordRef = useRef(null);
  const handleSignup = async (name, email, password, confirmPassword) => {
    setIsLoading(true);
    const verifyInput = verifySignupInput(
      name,
      email,
      password,
      confirmPassword
    );
    if (verifyInput.status === 200) {
      const request = await useSignup(
        signupUsernameRef.current.value,
        signupEmailRef.current.value,
        signupPasswordRef.current.value
      );
      if (request.status === 200) {
        toast.success(request.message);
        setShowSignup(false)
        signupUsernameRef.current.value = "";
        signupEmailRef.current.value = "";
        signupPasswordRef.current.value = "";
        ConfirmPasswordRef.current.value = "";
      } else {
        toast.error(request.message);
      }
    } else if (verifyInput.status === 400) {
      toast.error(verifyInput.message);
    }
    setIsLoading(false);
  };
  const handleLogin = async (email, password) => {
    setIsLoading(true);
    if (email === "" || password === "") {
      toast.error("Please fill all of the fields.");
      return;
    }
    const request = await useLogin(email, password);
    if(request.status === 200){
      toast.success(request.message)
      dispatch(setAuthData(request))
      createCookie({
        name: "authState",
        value: JSON.stringify(request),
        validDays: 7,
      });
      setTimeout(() => navigate("/"), 1500);
    }
    else{
      toast.error(request?.message)
    }
    setIsLoading(false);
  };
  return (
    <>
      <LoginContainer size={isSidebarOpen}>
        {showSignup ? (
          <>
            <LoginWrapper>
              <InfoWrapper>
                <LoginLabel>
                  Already have an account?{" "}
                  <Link onClick={() => setShowSignup(!showSignup)}>Login</Link>
                </LoginLabel>
              </InfoWrapper>
              <LoginInput placeholder="Username" ref={signupUsernameRef} />
              <LoginInput placeholder="Email" ref={signupEmailRef} />
              <LoginInput
                type={"password"}
                placeholder="Password"
                ref={signupPasswordRef}
              />
              <LoginInput
                type={"password"}
                placeholder="Confirm Password"
                ref={ConfirmPasswordRef}
              />
              <Button
                top={"10%"}
                disabled={isLoading}
                onClick={() => {
                  handleSignup(
                    signupUsernameRef.current.value,
                    signupEmailRef.current.value,
                    signupPasswordRef.current.value,
                    ConfirmPasswordRef.current.value
                  );
                }}
              >
                Signup
              </Button>
            </LoginWrapper>
          </>
        ) : (
          <>
            {/* SIGNUP  */}
            <LoginWrapper>
              <InfoWrapper>
                <LoginLabel>
                  Don't have an account?{" "}
                  <Link onClick={() => setShowSignup(!showSignup)}>Singup</Link>
                </LoginLabel>
              </InfoWrapper>
              <LoginInput placeholder="Email" ref={loginEmailRef} />
              <LoginInput
                type={"password"}
                placeholder="Password"
                ref={loginPasswordRef}
              />
              <Button
                top={"10%"}
                disabled={isLoading}
                onClick={() => {
                  handleLogin(
                    loginEmailRef.current.value,
                    loginPasswordRef.current.value
                  );
                }}
              >
                Login
              </Button>
            </LoginWrapper>
          </>
        )}
      </LoginContainer>
    </>
  );
};

export default Login;
