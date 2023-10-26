import React from "react";
import Header from "./parts/Header";

const AboutPage = ({ data }: any) => {
  return (
    <div>
      <Header props={data} />
    </div>
  );
};

export default AboutPage;
