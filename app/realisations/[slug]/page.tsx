import RealisationPage from "@/components/realisation/RealisationPage";
import { request } from "@/lib/datocms/datocms";
import Query from "@/lib/datocms/queries";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const {
    data: { allProjets },
  } = await request({ query: Query.QUERY_CARD_PROJETS });

  const paths = allProjets.map(({ slug }: any) => slug);

  return paths;
}

function getPageRequest(slug: any) {
  return { query: Query.QUERY_PROJET_BY_SLUG, variables: { slug } };
}

export default async function Page({ params }: any) {
  const pageRequest = getPageRequest(params.slug);
  const {
    data: { projet },
  } = await request(pageRequest);
  const {
    data: { allProjets },
  } = await request({ query: Query.QUERY_CARD_PROJETS });

  if (!projet) {
    notFound();
  }

  return <RealisationPage data={[projet, allProjets]} />;
}
