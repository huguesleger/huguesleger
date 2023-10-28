"use client";

import { useAppContext } from "@/app/context/AppContext";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Bio from "./parts/Bio";
import CircleText from "./parts/CircleText";
import Competences from "./parts/competences/Competences";
import Contact from "./parts/Contact";
import Cursus from "./parts/Cursus";
import Header from "./parts/Header";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutPage = ({ data }: any) => {
  const { setPageName } = useAppContext();
  const refContact = useRef(null);
  const refRounded = useRef(null);

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    setPageName("page-about");
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
          trigger: refContact.current,
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
    <div>
      <Header props={data} />
      <Bio props={data} />
      <CircleText props={data} />
      <Cursus props={data} />
      <Competences props={data} />
      <div className="wrap-rounded" data-scroll-section>
        <div className="inner-rounded" ref={refRounded}>
          <div className="rounded"></div>
        </div>
      </div>
      <div
        className="section-contact"
        ref={refContact}
        data-scroll-section
        data-scroll
      >
        <Contact props={data} />
      </div>
    </div>
  );
};

export default AboutPage;
