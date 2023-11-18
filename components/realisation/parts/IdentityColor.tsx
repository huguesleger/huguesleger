import Image from "next/image";
import React from "react";

const IdentityColor = ({ props }: any) => {
  const identityColor = props;
  return (
    <>
      {identityColor.imageCodeCouleur && (
        <section className="section project-color" data-scroll-section>
          <Image
            className="img-responsive"
            src={identityColor.imageCodeCouleur.url}
            width={identityColor.imageCodeCouleur.width}
            height={identityColor.imageCodeCouleur.height}
            alt={identityColor.imageCodeCouleur.alt}
          />
        </section>
      )}
    </>
  );
};

export default IdentityColor;
