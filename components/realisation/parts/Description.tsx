import formatTxt from "@/lib/functions/formatTxt";
import React from "react";
import { StructuredText } from "react-datocms/structured-text";

const Description = ({ props }: any) => {
  const desc = props;
  return (
    <section className="section project-desc" data-scroll-section>
      <div className="wrapper">
        <div className="container">
          <div className="wrap-desc">
            <div className="inner-desc">
              <h2>{formatTxt(desc.titreKeyword)}</h2>
            </div>
            <div className="inner-desc desc">
              <StructuredText data={desc.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
