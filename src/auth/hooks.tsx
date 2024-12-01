import { useContext } from "react";
import { AuthContext } from ".";

function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext;
}

export default useAuth;
