import { request } from "@/lib/datocms/datocms";
import Query from "@/lib/datocms/queries";
import React from "react";
import WorksPage from "@/components/realisations/WorksPage";

export default async function Realisations() {
  const {
    data: { allProjets },
  } = await request({ query: Query.QUERY_CARD_PROJETS });
  const {
    data: { home },
  } = await request({ query: Query.QUERY_HOME });

  return (
    <>
      <WorksPage data={[allProjets, home]} />
    </>
  );
}
