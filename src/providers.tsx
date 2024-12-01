import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
// import { TonConnectUIProvider } from "@tonconnect/ui-react";
import AuthContextProvider from "./auth";

const queryClient = new QueryClient();
function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthContextProvider>
      {/* <TonConnectUIProvider
        manifestUrl={import.meta.env.VITE_MANIFEST_URL || ""}
      > */}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      {/* </TonConnectUIProvider> */}
    </AuthContextProvider>
  );
}

export default Providers;
