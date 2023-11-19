import Image from "next/image";
import React from "react";

const IdentityGraphique = ({ props }: any) => {
  const identity = props;
  return (
    <section className="section project-identity" data-scroll-section>
      <div className="wrapper">
        <div className="container">
          <div className="wrap-content">
            <h2 className="title">{identity.titreCharte}</h2>
            <p className="desc">{identity.descriptionCharte}</p>
          </div>
        </div>
      </div>
      <div
        className="wrap-img"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="6"
      >
        <div className="inner-img">
          {identity.imageCharte.map((el: any) => {
            return (
              <div className="block-img" key={el.id}>
                <Image
                  src={el.image.url}
                  width={el.image.width}
                  height={el.image.height}
                  alt={el.image.alt}
                  className="img-responsive"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="wrap-img"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-6"
      >
        <div className="inner-img">
          {identity.imageCharteBottom.map((el: any) => {
            return (
              <div className="block-img" key={el.id}>
                <Image
                  src={el.image.url}
                  width={el.image.width}
                  height={el.image.height}
                  alt={el.image.alt}
                  className="img-responsive"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IdentityGraphique;
