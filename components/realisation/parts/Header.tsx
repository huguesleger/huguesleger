import Image from "next/image";
import React from "react";

const Header = ({ props }: any) => {
  const reaHeader = props;
  return (
    <div className="header-project" data-scroll-section>
      <div className="inner-img">
        <Image
          src={reaHeader.imageSlider.url}
          alt={reaHeader.imageSlider.alt}
          width={reaHeader.imageSlider.width}
          height={reaHeader.imageSlider.height}
          className="img-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Header;
