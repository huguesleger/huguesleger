"use client";

import { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import PlaneItem from "./PlaneItem";
import { usePathname, useRouter } from "next/navigation";

const CarouselItem = ({
  index,
  width,
  height,
  setActivePlane,
  activePlane,
  item,
}: any) => {
  const $root = useRef<any>();
  const [hover, setHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCloseActive, setCloseActive] = useState(false);
  const { viewport } = useThree();
  const timeoutID = useRef<any>();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (activePlane === index) {
      setIsActive(activePlane === index);
      setCloseActive(true);
    } else {
      setIsActive(false);
    }
  }, [activePlane]);

  useEffect(() => {
    if (!$root.current?.parent?.parent?.parent) return;
    const posImg = -$root.current.parent.position.y;
    const posWrapper = $root.current.parent.parent.position.y;
    const newPos = posImg - posWrapper;
    gsap.killTweensOf($root.current.position);
    gsap.to($root.current.position, {
      y: isActive ? newPos : 0,
      z: isActive ? 1 : -0.01,
      duration: 0.2,
      ease: "power3.out",
      delay: isActive ? 0 : 2,
    });
    gsap.to($root.current.parent.parent.parent.rotation, {
      z: isActive ? 0 : 0.08,
      duration: 0.2,
      ease: "power3.out",
      delay: isActive ? 0 : 2,
    });
    gsap.to($root.current.scale, {
      x: isActive ? 0.8 : 1,
      y: isActive ? 0.8 : 1,
    });
  }, [isActive]);

  /*------------------------------
  Hover effect
  ------------------------------*/
  useEffect(() => {
    const hoverScale = hover && !isActive ? 1.1 : 1;
    if (!$root.current?.children) return;
    const groupHover: any = $root.current.children[0];
    gsap.to(groupHover.material.uniforms.zoom, {
      value: hoverScale,
      duration: 0.5,
      ease: "power3.out",
    });

    const cursor = document.querySelector(".cursor");
    const label = document.querySelector(".cursor-label-canvas");

    if (hover === true) {
      cursor?.classList.add("has-canvas");
      label?.classList.remove("label-hidden");
    } else {
      cursor?.classList.remove("has-canvas");
      label?.classList.add("label-hidden");
    }
  }, [hover, isActive]);

  const handleClick = () => {
    setActivePlane(index);
    const path = pathname + "/" + item.slug;
    const wrapperEl = document.querySelector(".wrap-works");
    const tl = gsap.timeline();
    tl.to(wrapperEl, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
    setTimeout(function () {
      router.push(path);
    }, 1650);
  };

  const handleClose = (e: any) => {
    e.stopPropagation();
    if (!isActive) return;
    setActivePlane(null);
    setHover(false);
    clearTimeout(timeoutID.current);
    timeoutID.current = setTimeout(() => {
      setCloseActive(false);
      const doc: any = document;
      if (!doc) return;
      doc.querySelector(".wrapper-canvas").classList.remove("active");
    }, 1500); // The duration of this timer depends on the duration of the plane's closing animation.
  };

  return (
    <group
      ref={$root}
      onClick={handleClick}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <PlaneItem
        width={width}
        height={height}
        texture={item.imageSlider.url}
        active={isActive}
        name={item.slug}
      />

      {isCloseActive ? (
        <mesh position={[0, 0, 0.01]} onClick={handleClose}>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial transparent={true} opacity={0} color={"red"} />
        </mesh>
      ) : null}
    </group>
  );
};

export default CarouselItem;
