import axios from "axios";
import { FormEvent } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  StyledRegister,
  StyledRegisterLeft,
  StyledRegisterRight,
  StyledRegisterWrapper,
} from "./Register.style";

export const Register = () => {
  const username = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const passwordAgain = useRef<HTMLInputElement | null>(null);
  const history = useHistory()

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    if (passwordAgain.current?.value !== password.current?.value) {
      passwordAgain.current?.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current?.value,
        email: email.current?.value,
        password: password.current?.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login")
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <StyledRegister>
      <StyledRegisterWrapper>
        <StyledRegisterLeft>
          <h3 className="loginLogo">DatSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on DatSocial.
          </span>
        </StyledRegisterLeft>
        <StyledRegisterRight>
          <form className="loginBox" onSubmit={handleClick}>
            <input
              required
              placeholder="Username"
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
            />
            <input
              required
              placeholder="Password"
              ref={password}
              className="loginInput"
              type="password"
              minLength={8}
            />
            <input
              required
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>
            {/* <span className="loginForgot">Forgot Password?</span> */}
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </StyledRegisterRight>
      </StyledRegisterWrapper>
    </StyledRegister>
  );
};
