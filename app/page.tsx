"use client";
import React, { useEffect } from "react";
import { useAppContext } from "./context/AppContext";

const Home = () => {
  const { setPageName } = useAppContext();

  useEffect(() => {
    setPageName("page-home");
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
