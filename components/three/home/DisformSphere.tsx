"use client";

import React, { useRef } from "react";
import vertex from "./vertex";
import fragment from "./fragment";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Mesh, ShaderMaterial } from "three";

const DisformSphere = () => {
  const shaderRef = useRef<ShaderMaterial>(null);
  const ref = useRef<Mesh>(null);

  const uniforms = useRef({
    uTime: { value: 0 },
    uFrequency: { value: 2.0 },
    uPrimaryColor: { value: new THREE.Color("#383838") },
    uSecondaryColor: { value: new THREE.Color("#686968") },
  });

  useFrame((state, delta) => {
    if (!shaderRef.current) return;
    shaderRef.current.uniforms.uTime.value += delta * 0.3;
    shaderRef.current.uniforms.uFrequency.value;
  });

  return (
    <mesh position={[2.8, 0, 0]} ref={ref}>
      <sphereGeometry args={[3.5, 1024, 512]} />
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};

export default DisformSphere;
