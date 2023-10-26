import React from "react";
import Bio from "./parts/Bio";
import Header from "./parts/Header";

const AboutPage = ({ data }: any) => {
  return (
    <div>
      <Header props={data} />
      <Bio props={data} />
    </div>
  );
};

export default AboutPage;
