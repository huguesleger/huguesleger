"use client";

import React, { useEffect, useRef } from "react";
import vertex from "./vertex";
import fragment from "./fragment";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Mesh, ShaderMaterial } from "three";
import gsap from "gsap/all";
import { useTheme } from "next-themes";

const DisformSphere = () => {
  const shaderRef = useRef<ShaderMaterial>(null);
  const ref = useRef<Mesh>(null);
  const { theme } = useTheme();

  const uniforms = useRef({
    uTime: { value: 0 },
    uFrequency: { value: 2.0 },
    uPrimaryColor: {
      value: new THREE.Color("#BEBBBB"),
    },
    uSecondaryColor: {
      value: new THREE.Color("#383838"),
    },
  });

  useEffect(() => {
    const btnEnter = document.querySelector(".wrap-enter .inner-enter");
    if (!btnEnter) return;
    btnEnter.addEventListener("mouseenter", onMouseEnter);
    btnEnter.addEventListener("mouseleave", onMouseOut);

    if (!shaderRef.current) return;
    if (theme === "light" || theme === "system") {
      shaderRef.current.uniforms.uPrimaryColor.value = new THREE.Color(
        "#BEBBBB"
      );
      shaderRef.current.uniforms.uSecondaryColor.value = new THREE.Color(
        "#383838"
      );
    } else {
      shaderRef.current.uniforms.uPrimaryColor.value = new THREE.Color(
        "#383838"
      );
      shaderRef.current.uniforms.uSecondaryColor.value = new THREE.Color(
        "#686968"
      );
    }
  }, [theme]);

  useFrame((state, delta) => {
    if (!shaderRef.current) return;
    shaderRef.current.uniforms.uTime.value += delta * 0.3;
    shaderRef.current.uniforms.uFrequency.value;
  });

  const onMouseEnter = () => {
    if (!shaderRef.current) return;
    const tl = gsap.timeline();
    tl.to(shaderRef.current.uniforms.uFrequency, {
      value: 2.8,
      duration: 1.2,
      onStart: () => {
        if (!ref.current) return;
        gsap.to(ref.current.rotation, {
          y: 1.5,
          x: 1.5,
          duration: 1.5,
        });
      },
    });
  };

  const onMouseOut = () => {
    if (!shaderRef.current) return;
    const tl = gsap.timeline();
    tl.to(shaderRef.current.uniforms.uFrequency, {
      value: 2,
      duration: 0.8,
      onStart: () => {
        if (!ref.current) return;
        gsap.to(ref.current.rotation, {
          y: 0,
          x: 0,
          duration: 1.5,
        });
      },
    });
  };

  return (
    <mesh
      position={[2.8, 0, 0]}
      ref={ref}
      // onPointerEnter={onMouseEnter}
      // onPointerOut={onMouseOut}
    >
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
