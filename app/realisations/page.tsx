import { request } from "@/lib/datocms/datocms";
import Query from "@/lib/datocms/queries";
import React from "react";
import WorksInfos from "@/components/realisations/WorksInfos";
import WorksNumber from "@/components/realisations/WorksNumber";
import WorksProgress from "@/components/realisations/WorksProgress";
import dynamic from "next/dynamic";

const AllWork = dynamic(() => import("../../components/three/works/Works"), {
  ssr: false,
});

const Contact = dynamic(
  () => import("../../components/realisations/WorksContact"),
  {
    ssr: false,
  }
);

async function getWorks() {
  return await request({ query: Query.QUERY_CARD_PROJETS });
}

export default async function Realisations() {
  const projets = await getWorks();

  return (
    <div className="works">
      {/* @ts-ignore  */}
      <AllWork props={projets} />
      <WorksInfos props={projets} />
      <WorksNumber props={projets} />
      <WorksProgress />
      {/* @ts-ignore  */}
      <Contact />
    </div>
  );
}
