"use client";

import dynamic from "next/dynamic";
import React from "react";
// import Works from "../three/works/Works";
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
      {/* @ts-ignore  */}
      <AllWork props={data} />
      <WorksInfos props={data} />
      <WorksNumber props={data} />
      <WorksProgress />
      <WorksContact />
    </div>
  );
}
