import React, { createContext, ReactNode, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// interface  ContextType {
//   state:{
//     user:null,
//     isFetching : boolean,
//     error : boolean,
//   },
//   dispatch: React.Dispatch<{ type: string; value: unknown }>;
// }

interface InitState {
  user: any | null;
  isFetching: boolean;
  error: boolean;
  dispatch: React.DispatchWithoutAction | null;
}

export const INITIAL_STATE: InitState = {
  user: JSON.parse(localStorage.getItem("user")!) || null,
  isFetching: false,
  error: false,
  dispatch: null,
};

export const AuthContext = createContext(INITIAL_STATE);

interface Props {
  children: ReactNode;
}

export const AuthContextProvider = (props: Props) => {
  const { children } = props;

  // @ts-ignore
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
