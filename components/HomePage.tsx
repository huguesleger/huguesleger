"use client";

import { useAppContext } from "@/app/context/AppContext";
import formatTxt from "@/lib/functions/formatTxt";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Social from "./Social";
import Sphere from "./three/home/Sphere";
import { ArrowDownRight } from "lucide-react";

type IntroType = {
  title: string;
  // image: {
  //   alt: string;
  //   url: string;
  //   width: number;
  //   height: number;
  // };
  titleEnter: string;
  textEnter: string;
};

const Intro = ({
  title,
  // image,
  titleEnter,
  textEnter,
}: IntroType): JSX.Element => {
  const { setPageName } = useAppContext();

  useEffect(() => {
    setPageName("page-home");
    document.querySelector("html")?.classList.add("overflow-hidden");
    return () => {
      document.querySelector("html")?.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="wrapper" data-scroll-section>
      <div className="home container">
        <div className="wrap-title">
          <div className="inner-title">
            <h1 className="title">{formatTxt(title)}</h1>
          </div>
        </div>
        {/* <div className="inner-img">
          <Image
            className="img-intro"
            src={image.url}
            width={image.width}
            height={image.height}
            // alt={image.alt}
            alt="toto"
          />
        </div> */}
        <div className="block-bottom">
          <div className="wrap-enter">
            <ArrowDownRight
              strokeWidth={1.5}
              width={120}
              height={120}
              strokeLinecap="inherit"
              strokeLinejoin="inherit"
            />
            <Link href="/realisations" className="inner-enter" data-cursor>
              <span className="title-enter">{formatTxt(titleEnter)}</span>
              <span className="txt-enter">{formatTxt(textEnter)}</span>
            </Link>
          </div>
          <div className="city">
            <Image
              src="/images/mtp.svg"
              width={120}
              height={120}
              alt="montpellier"
            />
          </div>
        </div>
      </div>
      <Sphere />
      <Social classe={"social-home"} />
    </div>
  );
};

export default Intro;
