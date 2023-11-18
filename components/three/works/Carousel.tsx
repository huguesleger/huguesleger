"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import CarouselItem from "./CarouselItem";
import { lerp } from "../../utils";
import { useEffect } from "react";
import VirtualScroll from "virtual-scroll";

/*------------------------------
Gsap Defaults
------------------------------*/
gsap.defaults({
  duration: 2.5,
  ease: "power3.out",
});

/*------------------------------
Carousel
------------------------------*/
const Carousel = ({ projets }: any) => {
  const [$root, setRoot] = useState<any>();

  const [activePlane, setActivePlane] = useState(null);
  const [scrollIn, setScrollIn] = useState(false);
  const { viewport } = useThree();

  const works = projets;

  /*--------------------
  Vars
  --------------------*/
  const refItems = useRef<any>(null);
  const $items = useMemo(() => {
    if ($root) return $root.parent?.children;
  }, [$root]);

  const scroller = new VirtualScroll();

  const wW = window.innerWidth;

  /*------------------------------
Plane Settings
------------------------------*/
  let width = viewport.width / 1.65;
  let height = viewport.height / 1.45;
  let gap: number;
  if (wW <= 420) {
    width = viewport.width / 1.25;
    height = viewport.height / 1.95;
    gap = 2;
  } else if (wW > 420 && wW <= 1024) {
    gap = 1.5;
  } else {
    gap = 3;
  }

  let positionImg = height + gap;
  let scrollTarget = 0;
  let scrollPos = 0;
  let currentScroll = 0;

  /*--------------------
  RAF
  --------------------*/
  useFrame((delta) => {
    setScrollIn(true);

    if (!refItems.current) return;

    scroller.on((e) => {
      if (wW <= 1024) {
        scrollTarget = e.deltaY / 100;
      } else {
        scrollTarget = e.deltaY / 500;
      }
    });
    if (scrollIn === true) {
      scrollPos -= (scrollPos + scrollTarget) * 0.1;
      scrollTarget *= 0.9;
      currentScroll += scrollPos;

      if (!$items) return;
      let wholeHeight = $items.length * positionImg - gap - height;

      if (currentScroll <= 0) {
        currentScroll = 0;
        scrollPos = 0;
        refItems.current.position.y = currentScroll;
      } else {
        refItems.current.position.y = currentScroll;
      }
      if (currentScroll >= wholeHeight) {
        currentScroll = wholeHeight;
        scrollPos = 0;
        refItems.current.position.y = wholeHeight;
      }

      $items.forEach((el: any) => {
        const mesh: any = el.children[0].children[0];
        if (wW <= 1024) {
          mesh.material.uniforms.uShift.value = lerp(
            mesh.material.uniforms.uShift.value,
            scrollPos * 2.5,
            0.1
          );
        } else {
          mesh.material.uniforms.uShift.value = lerp(
            mesh.material.uniforms.uShift.value,
            scrollPos * 3.5,
            0.1
          );
        }
      });
    }

    if (activePlane != null) {
      setScrollIn(false);
    }
  });

  /*--------------------
  Handle Wheel
  --------------------*/
  const handleWheel = () => {
    const windowHeight = window.innerHeight;
    if (!refItems.current) return;
    const containerTop = (refItems.current.position.y + currentScroll) / 2;

    let visibleIndex = 0;

    $items?.forEach((item: any, index: any) => {
      const itemTop = containerTop - index * (height + gap);
      const itemBottom = itemTop + height - gap;

      if (itemTop < windowHeight && itemBottom > 0) {
        visibleIndex = index;
      }
    });

    const titles = document.querySelectorAll(".info-work");
    const number = document.querySelector(".number span");
    const progressRound: HTMLElement | null = document.querySelector(
      ".wrap-progress .text-progress"
    );

    titles.forEach((title: any, i: any) => {
      if (i === visibleIndex) {
        title.classList.add("active");
        const numberValue = visibleIndex + 1;
        if (!number) return;
        number.innerHTML = numberValue.toString();
      } else {
        title.classList.remove("active");
      }
    });
    if (!progressRound) return;
    progressRound.style.rotate = currentScroll * 10 + "deg";
  };

  useEffect(() => {
    const tl = gsap.timeline();
    const wrapperCanvas = document.querySelector(".wrapper-canvas");
    if (!wrapperCanvas) return;
    wrapperCanvas.classList.add("disabled-scroll");
    if (!refItems.current) return;
    if (activePlane == null) {
      tl.fromTo(
        refItems.current.children[0].position,
        {
          y: -10,
          duration: 1,
          ease: "Power2.easeInOut",
        },
        {
          y: 0,
          duration: 1,
          ease: "Power2.easeInOut",
          onStart: () => {
            gsap.fromTo(
              refItems.current.children[0].children[0].children[0].material
                .uniforms.uProgress,
              {
                value: 0.5,
                duration: 1.5,
                ease: "Power2.easeInOut",
              },
              {
                value: 0,
                duration: 1.5,
                ease: "Power2.easeInOut",
              }
            );
          },
          onComplete: () => {
            wrapperCanvas.classList.remove("disabled-scroll");
          },
        }
      );
    }
    scroller.on((e) => {
      handleWheel();
    });
  }, [refItems.current, handleWheel]);

  useEffect(() => {
    if (activePlane != null) {
      const newScroll = refItems.current.position.y;
      currentScroll = newScroll;
    }
  }, [activePlane]);

  /*--------------------
  Render Plane Events
  --------------------*/
  const renderPlaneEvents = () => {
    return (
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
    );
  };

  /*--------------------
  Render Slider
  --------------------*/
  const renderSlider = () => {
    return (
      <>
        <group ref={refItems} name="betty">
          {works.map((item: any, i: any) => (
            <group
              ref={setRoot}
              position={[0, -i * positionImg, 0]}
              key={i}
              name="img"
            >
              <CarouselItem
                width={width}
                height={height}
                setActivePlane={setActivePlane}
                activePlane={activePlane}
                key={i}
                item={item}
                index={i}
              />
            </group>
          ))}
        </group>
      </>
    );
  };

  return (
    <group>
      <group>
        {renderPlaneEvents()}
        {renderSlider()}
      </group>
    </group>
  );
};

export default Carousel;
