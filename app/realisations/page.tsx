import { request } from "@/lib/datocms/datocms";
import Query from "@/lib/datocms/queries";
import React from "react";
import Works from "../../components/three/works/Works";
import WorksContact from "@/components/realisations/WorksContact";
import WorksInfos from "@/components/realisations/WorksInfos";
import WorksNumber from "@/components/realisations/WorksNumber";
import WorksProgress from "@/components/realisations/WorksProgress";

async function getWorks() {
  return await request({ query: Query.QUERY_CARD_PROJETS });
}

export default async function Realisations() {
  const projets = await getWorks();

  return (
    <div className="works">
      <Works props={projets} />
      <WorksInfos props={projets} />
      <WorksNumber props={projets} />
      <WorksProgress />
      {typeof window !== "undefined" && <WorksContact />}
    </div>
  );
}
