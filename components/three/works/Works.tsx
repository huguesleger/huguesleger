"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Carousel from "./Carousel";

const Works = ({ props }: any) => {
  return (
    <div className="container-canvas">
      <Canvas className="wrapper-canvas">
        <Suspense fallback={null}>
          <color attach="background" args={["#171717"]} />
          <Carousel projets={props} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Works;
