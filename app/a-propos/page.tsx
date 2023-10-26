import AboutPage from "@/components/about/AboutPage";
import { request } from "@/lib/datocms/datocms";
import Query from "@/lib/datocms/queries";
import React from "react";

export default async function About() {
  const {
    data: { about },
  } = await request({ query: Query.QUERY_ABOUT });

  return <AboutPage data={about} />;
}
