"use client";

import { useAppContext } from "@/app/context/AppContext";
import React, { useEffect } from "react";
import Description from "./parts/Description";
import Header from "./parts/Header";
import Infos from "./parts/Infos";

export default function RealisationPage({ data }: any) {
  const { setPageName } = useAppContext();

  useEffect(() => {
    setPageName("page-realisation-detail");
  }, []);

  return (
    <>
      <Header props={data} />
      <Infos props={data} />
      <Description props={data} />
    </>
  );
}
