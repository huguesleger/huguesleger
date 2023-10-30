import Image from "next/image";
import React from "react";
import { StructuredText } from "react-datocms/structured-text";
import { isEmptyDocument } from "datocms-structured-text-utils";

const Cards = ({ props }: any) => {
  const card = props;
  return (
    <section className="section project-card" data-scroll-section>
      <div className="wrapper">
        <div className="container">
          {!isEmptyDocument(card.texteImageCard) && (
            <div className="wrap-desc">
              <div className="inner-desc">
                <StructuredText data={card.texteImageCard} />
              </div>
            </div>
          )}
          <div className="wrap-cards">
            {card.imageCard.map((el: any) => {
              return (
                <div className="card" key={el.id}>
                  <Image
                    className="img-cover"
                    src={el.image.url}
                    width={el.image.width}
                    height={el.image.height}
                    alt={el.image.alt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
