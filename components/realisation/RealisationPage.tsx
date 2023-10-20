import React from "react";
import Header from "./parts/Header";

export default function RealisationPage({ data }: any) {
  return (
    <>
      <div>
        <h1>{data.titre}</h1>
      </div>
      <Header image={data.imageSlider} />
    </>
  );
}
