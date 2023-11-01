"use client";

import { useAppContext } from "@/app/context/AppContext";
import React, { useEffect } from "react";
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

export default function RealisationPage({ data }: any) {
  const dataProject = data[0];
  const dataAllProject = data[1];

  const { setPageName } = useAppContext();

  useEffect(() => {
    setPageName("page-realisation-detail");
  }, []);

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
      <Cards props={dataProject} />
      <VisuOutside props={dataProject} />
      <div className="project-next" data-scroll-section>
        <NavigationNext props={[dataProject, dataAllProject]} />
      </div>
    </>
  );
}
