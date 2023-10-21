import { request } from "@/lib/datocms/datocms";
import Query from "@/lib/datocms/queries";
import React from "react";
// import WorksPage from "@/components/realisations/WorksPage";
import dynamic from "next/dynamic";

const AllWork = dynamic(() => import("@/components/realisations/WorksPage"), {
  ssr: false,
});

export default async function Realisations() {
  const {
    data: { allProjets },
  } = await request({ query: Query.QUERY_CARD_PROJETS });

  return (
    <>
      {/* @ts-ignore  */}
      <AllWork data={allProjets} />
    </>
  );
}
