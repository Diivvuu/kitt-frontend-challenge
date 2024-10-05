// src/app/flights/layout.tsx
"use client"; // This is necessary because we are using the Provider, which is a client component
import { Provider } from "react-redux";
import store from "@/store/store";

export default function FlightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
}
