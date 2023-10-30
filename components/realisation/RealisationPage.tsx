"use client";

import { useAppContext } from "@/app/context/AppContext";
import React, { useEffect } from "react";
import Description from "./parts/Description";
import DeviceDesktop from "./parts/DeviceDesktop";
import DeviceMobile from "./parts/DeviceMobile";
import Header from "./parts/Header";
import IdentityColor from "./parts/IdentityColor";
import IdentityGraphique from "./parts/IdentityGraphique";
import ImgDesign from "./parts/ImgDesign";
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
      <ImgDesign props={data} />
      <IdentityGraphique props={data} />
      <IdentityColor props={data} />
      <DeviceMobile props={data} />
      <DeviceDesktop props={data} />
    </>
  );
}
