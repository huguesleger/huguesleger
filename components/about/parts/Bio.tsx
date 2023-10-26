import Image from "next/image";
import React from "react";
import { StructuredText } from "react-datocms/structured-text";

const Bio = ({ props }: any) => {
  const bio = props;
  return (
    <section className="section-bio" data-scroll-section>
      <div className="wrapper">
        <div className="container">
          <div className="wrap-content">
            <div className="col-txt">
              <div className="inner-title" data-scroll>
                <h2 className="section-title" data-scroll data-scroll-speed="3">
                  {bio.titreBio}
                  <span className="icon-emoji">{bio.iconBio}</span>
                </h2>
              </div>
              <div className="inner-txt" data-scroll>
                <div className="font-18" data-scroll data-scroll-speed="2">
                  <StructuredText data={bio.texteBio} />
                </div>
              </div>
            </div>
            <div className="col-img">
              <div className="inner-img">
                <Image
                  className="img-responsive"
                  src={bio.imageBio.url}
                  width={bio.imageBio.width}
                  height={bio.imageBio.height}
                  alt={bio.imageBio.alt}
                  data-scroll
                  data-scroll-speed="-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
