
import { UserType } from "../DummyData";

export const LoginStart = (userCredentials: any) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user: UserType) => ({
  type: "LOGIN_SUCCESS",
	payload:user,
});

export const LoginFailure = (error:any) => ({
  type: "LOGIN_FAILURE",
	payload:error,
});

export const Follow = (userId : any) => ({
  type : "FOLLOW",
  payload : userId,
})

export const UnFollow = (userId : any) => ({
  type : "UNFOLLOW",
  payload : userId,
})