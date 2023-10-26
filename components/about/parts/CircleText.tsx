import React, { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const CircleText = ({ props }: any) => {
  const circleText = props;

  const { scroll } = useLocomotiveScroll();
  let scrollTarget = 0;

  useEffect(() => {
    const txt = document.querySelectorAll(".circles-text");

    if (scroll) {
      scroll.on("scroll", () => {
        scrollTarget = scroll.scroll.instance.scroll.y / 10;
        txt.forEach((el: any) => {
          el.style.transform = "rotate(" + scrollTarget + "deg)";
        });
      });
    }
  }, [scroll]);

  return (
    <section className="section-circle-txt" data-scroll-section>
      <div className="wrapper">
        <div className="container">
          <svg
            className="circles"
            width="100%"
            height="100%"
            viewBox="0 0 1400 1400"
          >
            <defs>
              <path
                id="circle-1"
                d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
              />
              <path
                id="circle-2"
                d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"
              />
              <path
                id="circle-3"
                d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"
              />
              <path
                id="circle-4"
                d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"
              />
            </defs>
            <text className="circles-text circles-text-1">
              <textPath
                className="circles-text-path"
                xlinkHref="#circle-1"
                aria-label=""
                textLength="2820"
              >
                {circleText.texteCircle[0].texte}
              </textPath>
            </text>
            <text className="circles-text circles-text-2">
              <textPath
                className="circles-text-path"
                xlinkHref="#circle-2"
                aria-label=""
                textLength="1985"
              >
                {circleText.texteCircle[1].texte}
              </textPath>
            </text>
            <text className="circles-text circles-text-3">
              <textPath
                className="circles-text-path"
                xlinkHref="#circle-3"
                aria-label=""
                textLength="1310"
              >
                {circleText.texteCircle[2].texte}
              </textPath>
            </text>
            <text className="circles-text circles-text-4">
              <textPath
                className="circles-text-path"
                xlinkHref="#circle-4"
                aria-label=""
                textLength="810"
              >
                {circleText.texteCircle[3].texte}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CircleText;
