"use client";
import React, { ReactNode, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useAppContext } from "@/app/context/AppContext";
import { useRouter } from "next/navigation";

type ScrollType = {
  children: ReactNode;
};

const ScrollLoco = ({ children }: ScrollType): JSX.Element => {
  const asPath = useRouter();
  const containerRef = useRef(null);
  const { pageName } = useAppContext();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      location={asPath}
      onUpdate={(scroll: any) => {}}
      onLocationChange={(scroll: any) => {
        scroll.scrollTo(0, {
          duration: 800,
          disableLerp: true,
        });
      }}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef} className={pageName}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
};

export default ScrollLoco;
