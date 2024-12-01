import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Toaster } from "@/components/ui/toaster";
import { User } from "@/types/user";

interface MyRouterContext {
  isLogin: boolean;
  user: User | undefined;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
    </>
  ),
});
