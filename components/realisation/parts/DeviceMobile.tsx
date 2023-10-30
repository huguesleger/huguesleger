import Image from "next/image";
import React from "react";

const DeviceMobile = ({ props }: any) => {
  const mobile = props;
  return (
    <section
      className="section project-mobile"
      data-scroll-section
      style={{ backgroundColor: mobile.colorSectionMobile.hex }}
    >
      <Image
        className="img-responsive"
        src={mobile.imageTemplateMobile.url}
        width={mobile.imageTemplateMobile.width}
        height={mobile.imageTemplateMobile.height}
        alt={mobile.imageTemplateMobile.alt}
      />
    </section>
  );
};

export default DeviceMobile;
