import React from "react";
import { StructuredText } from "react-datocms/structured-text";

const Text = ({ props }: any) => {
  const text = props;
  return (
    <section className="section project-text" data-scroll-section>
      <div className="wrapper">
        <div className="container">
          <div className="wrap-desc">
            <div className="inner-desc">
              <StructuredText data={text.texteProjet} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;
