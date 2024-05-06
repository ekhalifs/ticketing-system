import React, { createContext, useCallback, useEffect, useState } from "react";
import { BASE_URL, postRequest } from "../Services/util";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  console.log(loginInfo);
  console.log("user", user);
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoadingLoading] = useState(false);

  useEffect(() => {
    const res = localStorage.getItem("user-ticket");
    console.log(res);
    setUser(JSON.parse(res));
  }, []);

  const updateLoginInfo = (info) => {
    setLoginInfo(info);
  };

  const clearLoginData = () => {
    setLoginInfo({
      email: "",
      password: "",
    });
  };

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setLoginError("");
        setIsLoadingLoading(true);
        const response = await postRequest(
          `${BASE_URL}/users/login`,
          JSON.stringify(loginInfo)
        );
        console.log(response);
        setIsLoadingLoading(false);
        if (response.error) {
          clearLoginData();
          return setLoginError(response);
        }
        setUser(response);
        clearLoginData();
        localStorage.setItem("user-ticket", JSON.stringify(response));
      } catch (e) {
        console.log("internal server error");
      }
    },
    [loginInfo]
  );

  useEffect(() => {
    let loginErrorTimeout;
    if (loginError) {
      loginErrorTimeout = setTimeout(() => {
        setLoginError(null);
      }, 2000);
    }
    return () => {
      clearTimeout(loginErrorTimeout);
    };
  }, [loginError]);

  const logoutUser = useCallback(() => {
    localStorage.removeItem("user-ticket");
    setUser("");
  }, []);
  return (
    <AuthContext.Provider
      value={{
        updateLoginInfo,
        loginInfo,
        loginError,
        isLoginLoading,
        user,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
