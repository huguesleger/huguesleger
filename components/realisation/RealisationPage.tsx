"use client";

import { useAppContext } from "@/app/context/AppContext";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Cards from "./parts/Cards";
import Description from "./parts/Description";
import DeviceDesktop from "./parts/DeviceDesktop";
import DeviceMobile from "./parts/DeviceMobile";
import Header from "./parts/Header";
import IdentityColor from "./parts/IdentityColor";
import IdentityGraphique from "./parts/IdentityGraphique";
import ImgDesign from "./parts/ImgDesign";
import Infos from "./parts/Infos";
import NavigationNext from "./parts/NavigationNext";
import TemplateDesktop from "./parts/TemplateDesktop";
import TemplateDesktopFull from "./parts/TemplateDesktopFull";
import Text from "./parts/Text";
import VisuOutside from "./parts/VisuOutside";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function RealisationPage({ data }: any) {
  const dataProject = data[0];
  const dataAllProject = data[1];

  const refRounded = useRef(null);
  const refNavigationNext = useRef(null);

  const { scroll } = useLocomotiveScroll();

  const { setPageName } = useAppContext();

  useEffect(() => {
    setPageName("page-realisation-detail");
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const windowWidth = window.innerWidth;
    let heightRound: any;
    if (windowWidth >= 1200) {
      heightRound = 94;
    } else {
      heightRound = 35;
    }
    scroll?.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });
    if (scroll) {
      ScrollTrigger.addEventListener("refresh", () => scroll.update());
      ScrollTrigger.defaults({ scroller: "[data-scroll-container]" });
      gsap.set(refRounded.current, {
        height: heightRound,
      });
      gsap.to(refRounded.current, {
        scrollTrigger: {
          trigger: refNavigationNext.current,
          scrub: 0,
          start: "0% 100%",
          end: "100% 100%",
        },
        height: 0,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }
  }, [scroll, refRounded.current]);

  return (
    <>
      <Header props={dataProject} />
      <Infos props={dataProject} />
      <Description props={dataProject} />
      <ImgDesign props={dataProject} />
      <IdentityGraphique props={dataProject} />
      <IdentityColor props={dataProject} />
      <DeviceMobile props={dataProject} />
      <DeviceDesktop props={dataProject} />
      <Text props={dataProject} />
      <TemplateDesktopFull props={dataProject} />
      <TemplateDesktop props={dataProject} />
      <VisuOutside props={dataProject} />
      <Cards props={dataProject} />
      <div className="wrap-rounded" data-scroll-section>
        <div className="inner-rounded" ref={refRounded}>
          <div className="rounded"></div>
        </div>
      </div>
      <div
        className="project-next"
        ref={refNavigationNext}
        data-scroll-section
        data-scroll
      >
        <NavigationNext props={[dataProject, dataAllProject]} />
      </div>
    </>
  );
}
