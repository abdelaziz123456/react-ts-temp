import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
type Props = {
  children: JSX.Element;
};
const queryClient = new QueryClient();
const ReactQueryProviders = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProviders;
