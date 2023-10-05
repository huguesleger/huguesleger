import HomePage from "@/components/HomePage";
import Sphere from "@/components/three/home/Sphere";
import React from "react";
import { request } from "../lib/datocms/datocms";
import Query from "../lib/datocms/queries";

export default async function Home() {
  const {
    data: { home },
  } = await request({ query: Query.QUERY_HOME });

  return (
    <div>
      <HomePage
        title={home.titre}
        image={home.image}
        titleEnter={home.titreEntrer}
        textEnter={home.texteEntrer}
      />
      <Sphere />
    </div>
  );
}
