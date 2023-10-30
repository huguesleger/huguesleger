import Image from "next/image";
import React from "react";

const DeviceDesktop = ({ props }: any) => {
  const desktop = props;
  return (
    <section
      className="section project-device"
      data-scroll-section
      style={{ backgroundColor: desktop.colorSectionMobile.hex }}
    >
      <div className="wrapper">
        <div className="container">
          <div className="wrap-img">
            <Image
              className="img-responsive"
              src={desktop.imageDevice.url}
              width={desktop.imageDevice.width}
              height={desktop.imageDevice.height}
              alt={desktop.imageDevice.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceDesktop;
