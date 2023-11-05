"use client";

import { Canvas } from "@react-three/fiber";
import { useTheme } from "next-themes";
import React, { Suspense } from "react";
import DisformSphere from "./DisformSphere";

const Sphere = () => {
  const { theme } = useTheme();

  return (
    <div className="container-canvas">
      <Canvas>
        <Suspense fallback={null}>
          <color
            attach="background"
            args={
              theme === "light" || theme === "system"
                ? ["#ffffff"]
                : ["#171717"]
            }
          />
          <DisformSphere />
          <ambientLight />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Sphere;
