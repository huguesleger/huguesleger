import Image from "next/image";
import React from "react";

const TemplateDesktopFull = ({ props }: any) => {
  const templateFull = props;
  return (
    <section
      className="section project-template-desktop-full"
      data-scroll-section
    >
      <Image
        className="img-cover"
        src={templateFull.imageTemplateDesktopFull.url}
        width={templateFull.imageTemplateDesktopFull.width}
        height={templateFull.imageTemplateDesktopFull.height}
        alt={templateFull.imageTemplateDesktopFull.alt}
      />
    </section>
  );
};

export default TemplateDesktopFull;
