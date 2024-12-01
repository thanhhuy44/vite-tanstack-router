import { RouterProvider } from "@tanstack/react-router";

import { router } from "./router";
import useAuth from "./auth/hooks";

function App() {
  const auth = useAuth();

  return (
    <RouterProvider
      router={router}
      context={{
        isLogin: auth.isLogin,
        user: auth.user,
      }}
    />
  );
}

export default App;
