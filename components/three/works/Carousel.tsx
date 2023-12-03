"use client";

import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import VirtualScroll from "virtual-scroll";
import { lerp } from "../../utils";
import CarouselItem from "./CarouselItem";
import { useAppContext } from "@/app/context/AppContext";

gsap.defaults({
  duration: 2.5,
  ease: "power3.out",
});

const Carousel = ({ projets }: any) => {
  const [$root, setRoot] = useState<any>();
  const [activePlane, setActivePlane] = useState(null);
  const [scrollIn, setScrollIn] = useState(false);
  const { viewport } = useThree();
  let { setValueCarousel, valueCarousel, visibleEl } = useAppContext();

  const works = projets;
  const refItems = useRef<any>(null);
  const scroller = new VirtualScroll();
  const wW = window.innerWidth;
  const width = viewport.width / 1.65;
  const height = viewport.height / 1.45;
  const gap = wW <= 420 ? 2 : wW > 420 && wW <= 1024 ? 1.5 : 3;
  const positionImg = height + gap;
  let scrollTarget = 0;
  let scrollPos = 0;
  let currentScroll = 0;

  // Function to update titles and active number
  const updateTitlesAndNumber = (titles: any, number: any, index: any) => {
    titles.forEach((title: any, i: any) => {
      if (i === index) {
        title.classList.add("active");
        const numberValue = index + 1;
        if (number) {
          number.innerHTML = numberValue.toString();
        }
      } else {
        title.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    const titles = document.querySelectorAll(".info-work");
    const number = document.querySelector(".number span");
    updateTitlesAndNumber(titles, number, visibleEl);
  }, [visibleEl]);

  useFrame((delta) => {
    const handleScroll = (e: any) => {
      scrollTarget = wW <= 1024 ? e.deltaY / 100 : e.deltaY / 500;
    };

    const updateScrollPosition = () => {
      scrollPos -= (scrollPos + scrollTarget) * 0.1;
      scrollTarget *= 0.9;
      currentScroll += scrollPos;

      if (!refItems.current) return;

      const wholeHeight = works.length * positionImg - gap - height;

      if (currentScroll <= 0) {
        currentScroll = 0;
        scrollPos = 0;
        currentScroll = valueCarousel;
        refItems.current.position.y = valueCarousel;
      } else if (currentScroll >= wholeHeight) {
        currentScroll = wholeHeight;
        scrollPos = 0;
        refItems.current.position.y = wholeHeight;
      } else {
        refItems.current.position.y = currentScroll;
        valueCarousel = Math.min(
          Math.max(0, valueCarousel + scrollPos),
          wholeHeight
        );
      }

      // Update mesh positions
      works.forEach((el: any, index: any) => {
        const mesh = $root.parent?.children[index].children[0].children[0];
        const shiftValue = wW <= 1024 ? scrollPos * 2.5 : scrollPos * 3.5;
        mesh.material.uniforms.uShift.value = lerp(
          mesh.material.uniforms.uShift.value,
          shiftValue,
          0.1
        );
      });
    };

    const wrapperCanvas = document.querySelector(".wrapper-canvas");
    if (!wrapperCanvas) return;

    if (wrapperCanvas.classList.contains("disabled-scroll")) {
      scroller.off(handleScroll);
    } else {
      scroller.on(handleScroll);
    }

    setScrollIn(true);
    if (!refItems.current) return;

    if (scrollIn === true) {
      updateScrollPosition();
    }

    if (activePlane != null) {
      setScrollIn(false);
    }
  });

  const handleWheel = () => {
    const windowHeight = window.innerHeight;
    if (!refItems.current) return;
    const containerTop = (refItems.current.position.y + valueCarousel) / 2;
    let visibleIndex = 0;
    works.forEach((item: any, index: any) => {
      const itemTop = containerTop - index * (height + gap);
      const itemBottom = itemTop + height - gap;
      if (itemTop < windowHeight && itemBottom > 0) {
        visibleIndex = index;
      }
    });
    const titles = document.querySelectorAll(".info-work");
    const number = document.querySelector(".number span");
    updateTitlesAndNumber(titles, number, visibleIndex);

    const progressRound: HTMLElement | null = document.querySelector(
      ".wrap-progress .text-progress"
    );
    if (progressRound) {
      progressRound.style.rotate = valueCarousel * 10 + "deg";
    }
  };

  useEffect(() => {
    const handleWheelWrapper = (e: any) => {
      handleWheel();
    };

    if (refItems.current) {
      scroller.on(handleWheelWrapper);
    }

    return () => {
      scroller.off(handleWheelWrapper);
    };
  }, [handleWheel]);

  useEffect(() => {
    if (activePlane != null) {
      const newScroll = refItems.current.position.y;
      currentScroll = newScroll;
      setValueCarousel(refItems.current.position.y);
    }
  }, [activePlane]);

  const renderPlaneEvents = () => {
    // Render plane events
    return (
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
    );
  };

  const renderSlider = () => {
    // Render slider items
    return (
      <group ref={refItems} name="betty">
        {works.map((item: any, i: any) => (
          <group
            ref={i === 0 ? setRoot : null}
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
