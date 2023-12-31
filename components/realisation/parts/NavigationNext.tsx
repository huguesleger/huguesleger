import HoverReveal from "@/components/HoverReveal";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import React from "react";

const NavigationNext = ({ props }: any) => {
  const rea = props[0];
  const allRea = props[1];

  const getNextpost = () => {
    const index = allRea.findIndex((el: any) => el.slug === rea.slug);
    if (index === (allRea && allRea.length) - 1) {
      return allRea[0];
    } else {
      return allRea[index + 1];
    }
  };

  return (
    <div className="wrapper">
      <div className="content-next">
        <div
          className="wrap-link"
          data-scroll
          data-scroll-speed="-6"
          data-scroll-position="bottom"
        >
          <HoverReveal
            image={getNextpost().imageSlider.url}
            widthImage={150}
            heightImage={220}
          >
            <div className="inner-title" data-scroll>
              <p
                className="title-project-next"
                data-scroll
                data-scroll-speed="3"
              >
                Projet Suivant
              </p>
            </div>
            <Link
              className="link-next-project"
              href={`/realisations/${getNextpost().slug}`}
            >
              <span data-cursor-label="Voir le projet">
                {getNextpost().titre}
              </span>
            </Link>
          </HoverReveal>
        </div>
        <div className="inner-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NavigationNext;
