import ReactQueryProviders from "Providers/ReactQueryProviders";
import React from "react";

type Props = {
  children: JSX.Element;
};
export default function ProviderWrapper({ children }: Props) {
  return <ReactQueryProviders>{children}</ReactQueryProviders>;
}
