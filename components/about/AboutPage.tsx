"use client";

import { useAppContext } from "@/app/context/AppContext";
import React, { useEffect } from "react";
import Bio from "./parts/Bio";
import CircleText from "./parts/CircleText";
import Header from "./parts/Header";

const AboutPage = ({ data }: any) => {
  const { setPageName } = useAppContext();

  useEffect(() => {
    setPageName("page-about");
  }, []);

  return (
    <div>
      <Header props={data} />
      <Bio props={data} />
      <CircleText props={data} />
    </div>
  );
};

export default AboutPage;
