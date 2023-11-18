import Image from "next/image";
import React from "react";

const VisuOutside = ({ props }: any) => {
  const outside = props;
  return (
    <>
      {outside.pubOutside && (
        <section className="section project-outside" data-scroll-section>
          <Image
            className="img-responsive"
            src={outside.pubOutside.url}
            width={outside.pubOutside.width}
            height={outside.pubOutside.height}
            alt={outside.pubOutside.alt}
          />
        </section>
      )}
    </>
  );
};

export default VisuOutside;
