import { AuthStatus } from "@/types/auth";
import { User } from "@/types/user";
import { createContext, useEffect, useState, ReactNode } from "react";
import Cookies from "js-cookie";

interface LoginParams {
  accessToken: string;
  refreshToken: string;
  user: User;
}

interface IAuthContext {
  isLogin: boolean;
  status: AuthStatus;
  user: User | undefined;
  logIn: (params: LoginParams) => void;
  logOut: (onSignOut?: () => void) => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [user, setUser] = useState<User | undefined>(undefined);
  const accessToken = Cookies.get("accessToken");

  const logIn = async ({ accessToken, refreshToken, user }: LoginParams) => {
    Cookies.set("accessToken", accessToken);
    Cookies.set("refreshToken", refreshToken);
    setIsLogin(true);
    setStatus("isAuthenticated");
    setUser(user);
  };

  const logOut = async (onSignOut?: () => void) => {
    setIsLogin(false);
    setStatus("notAuthenticated!");
    setUser(undefined);
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    localStorage.clear();
    if (onSignOut) {
      onSignOut();
    }
    // if (redirect) {
    //   await navigate({
    //     to: "/",
    //   });
    // }
  };

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
      setStatus("isAuthenticated");
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ isLogin, status, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
