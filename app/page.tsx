"use client";
import Sphere from "@/components/three/home/Sphere";
import React, { useEffect } from "react";
import { useAppContext } from "./context/AppContext";

const Home = () => {
  const { setPageName } = useAppContext();

  useEffect(() => {
    setPageName("page-home");
  }, []);

  return (
    <div>
      <Sphere />
    </div>
  );
};

export default Home;
