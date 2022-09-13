import { FormEvent, useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import {
  StyledLogin,
  StyledLoginLeft,
  StyledLoginRight,
  StyledLoginWrapper,
} from "./Login.style";
import { Link } from "react-router-dom";

export const Login = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginCall(
      { email: email.current?.value, password: password.current?.value },
      dispatch
    );
  };

  return (
    <StyledLogin>
      <StyledLoginWrapper>
        <StyledLoginLeft>
          <h3 className="loginLogo">DatSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on DatSocial.
          </span>
        </StyledLoginLeft>
        <StyledLoginRight>
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
              minLength={8}
              required
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="inherit" /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Creat a New Account"
                )}
              </button>
            </Link>
          </form>
        </StyledLoginRight>
      </StyledLoginWrapper>
    </StyledLogin>
  );
};
