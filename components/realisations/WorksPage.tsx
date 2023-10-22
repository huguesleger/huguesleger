"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import WorksContact from "./parts/WorksContact";
import WorksInfos from "./parts/WorksInfos";
import WorksNumber from "./parts/WorksNumber";
import WorksProgress from "./parts/WorksProgress";

const AllWork = dynamic(() => import("../three/works/Works"), {
  ssr: false,
});

export default function WorksPage({ data }: any) {
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
      <AllWork props={data} />
      <div className="wrap-works">
        <WorksInfos props={data} />
        <WorksNumber props={data} />
        <WorksProgress />
        <WorksContact />
      </div>
    </div>
  );
}
