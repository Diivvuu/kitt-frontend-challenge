"use client";
import Home from "@/app/HomePage";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store/store";

const page = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default page;
