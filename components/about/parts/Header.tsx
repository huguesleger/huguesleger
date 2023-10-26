import SplittingWrapperWord from "@/components/splitting/SplittingWrapperWord";
import React from "react";

const Header = ({ props }: any) => {
  const about = props;
  return (
    <div className="wrapper" data-scroll-section>
      <div className="container">
        <div className="wrap-title-about">
          <h1 className="title-about" data-scroll>
            <span
              className="title-1"
              data-scroll
              data-scroll-speed="3"
              data-scroll-position="top"
            >
              <SplittingWrapperWord>{about.titre}</SplittingWrapperWord>
            </span>
            <span
              className="title-2"
              data-scroll
              data-scroll-speed="2"
              data-scroll-position="top"
            >
              <SplittingWrapperWord>{about.titre2}</SplittingWrapperWord>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
