import Image from "next/image";
import React from "react";

const TemplateDesktop = ({ props }: any) => {
  const template = props;
  return (
    <section className="section project-template-desktop" data-scroll-section>
      <div className="wrapper">
        <div className="container">
          <div className="wrap-img">
            <Image
              className="img-responsive"
              src={template.imageTemplateDesktop.url}
              width={template.imageTemplateDesktop.width}
              height={template.imageTemplateDesktop.height}
              alt={template.imageTemplateDesktop.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateDesktop;
