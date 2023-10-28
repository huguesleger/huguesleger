"use client";

import { useAppContext } from "@/app/context/AppContext";
import React, { useEffect, useRef } from "react";
import Bio from "./parts/Bio";
import CircleText from "./parts/CircleText";
import Competences from "./parts/competences/Competences";
import Contact from "./parts/Contact";
import Cursus from "./parts/Cursus";
import Header from "./parts/Header";

const AboutPage = ({ data }: any) => {
  const { setPageName } = useAppContext();
  const refContact = useRef(null);

  useEffect(() => {
    setPageName("page-about");
  }, []);

  return (
    <div>
      <Header props={data} />
      <Bio props={data} />
      <CircleText props={data} />
      <Cursus props={data} />
      <Competences props={data} />
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
