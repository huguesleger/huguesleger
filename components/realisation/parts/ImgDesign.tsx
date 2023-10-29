import Image from "next/image";
import React from "react";

const ImgDesign = ({ props }: any) => {
  const design = props;
  return (
    <section className="section project-design" data-scroll-section>
      <Image
        className="img-cover"
        src={design.imageGraphique.url}
        width={design.imageGraphique.width}
        height={design.imageGraphique.height}
        alt={design.imageGraphique.alt}
      />
    </section>
  );
};

export default ImgDesign;
