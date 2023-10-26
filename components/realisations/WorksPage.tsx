"use client";

import { useAppContext } from "@/app/context/AppContext";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect } from "react";
import WorksContact from "./parts/WorksContact";
import WorksInfos from "./parts/WorksInfos";
import WorksNumber from "./parts/WorksNumber";
import WorksProgress from "./parts/WorksProgress";

const Works = dynamic(() => import("../three/works/Works"), {
  ssr: false,
});

export default function WorksPage({ data }: any) {
  const { setPageName } = useAppContext();

  useEffect(() => {
    setPageName("page-realisations");
    return () => {};
  }, []);

  return (
    <div className="works">
      <div className="works-img">
        <div className="inner-img">
          {data.map((el: any, i: any) => {
            return (
              <div className="thumbnail" key={i}>
                <Image
                  src={el.imageSlider.url}
                  fill
                  alt=""
                  className="img-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* @ts-ignore  */}
      <Works props={data} />
      <div className="wrap-works">
        <WorksInfos props={data} />
        <WorksNumber props={data} />
        <WorksProgress />
        <WorksContact />
      </div>
    </div>
  );
}
