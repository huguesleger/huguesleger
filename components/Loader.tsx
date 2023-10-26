"use client";

import React, { useEffect, useRef } from "react";
import ChangeWord from "./ChangeWord";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Loader = () => {
  const refLoader = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    const tl = gsap.timeline();

    if (pathname === "/") {
      tl.to(refLoader.current, {
        delay: 7,
        opacity: 0,
        ease: "Power2.easeInOut",
        duration: 0.5,
        onComplete: () => {
          gsap.to(refLoader.current, {
            display: "none",
            delay: 0.3,
          });
        },
      });
    }
  }, [pathname]);

  return (
    <>
      {pathname === "/" ? (
        <div className="loader-wrapper" ref={refLoader}>
          <div className="loader">
            <div className="loader-inner">
              <div className="wrap-words">
                <ChangeWord
                  words={[
                    "hugues Leger",
                    "Hello",
                    "Salut",
                    "Créatif Développeur front",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
