"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import DisformSphere from "./DisformSphere";

const Sphere = () => {
  return (
    <div className="container-canvas">
      <Canvas>
        <Suspense fallback={null}>
          <color attach="background" args={["#ffffff"]} />
          <DisformSphere />
          <ambientLight />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Sphere;
